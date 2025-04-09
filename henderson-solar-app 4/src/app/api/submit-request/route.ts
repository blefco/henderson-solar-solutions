import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Define form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  address: z.string().min(5, { message: "Please enter your street address" }),
  city: z.string().min(1, { message: "Please enter your city" }),
  zipCode: z.string().regex(/^89[0-9]{3}$/, { message: "Please enter a valid Henderson area zip code" }),
  homeSize: z.string().min(1, { message: "Please select your home size" }),
  electricBill: z.string().min(1, { message: "Please select your average monthly electric bill" }),
  roofType: z.string().min(1, { message: "Please select your roof type" }),
  roofAge: z.string().min(1, { message: "Please select your roof age" }),
  shading: z.string().min(1, { message: "Please select the amount of shading" }),
  additionalInfo: z.string().optional(),
  contactPreference: z.string().min(1, { message: "Please select your preferred contact method" }),
  termsAccepted: z.boolean().refine(val => val === true, { message: "You must accept the terms and conditions" })
});

// Henderson area zip codes
const hendersonZipCodes = ['89002', '89011', '89012', '89014', '89015', '89016', '89044', '89052', '89053', '89074', '89077'];

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Validate form data
    const validationResult = formSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          errors: validationResult.error.format() 
        }, 
        { status: 400 }
      );
    }
    
    const data = validationResult.data;
    
    // Additional validation for Henderson zip codes
    if (!hendersonZipCodes.includes(data.zipCode)) {
      return NextResponse.json(
        { 
          success: false, 
          errors: { 
            zipCode: { _errors: ["Please enter a valid Henderson area zip code"] } 
          } 
        }, 
        { status: 400 }
      );
    }
    
    // In a production environment, we would:
    // 1. Store the submission in a database
    // 2. Send notification emails
    // 3. Integrate with CRM systems
    
    // For this demo, we'll use D1 database to store the submission
    const { DB } = request.env;
    
    if (DB) {
      try {
        // Insert form submission into database
        await DB.prepare(`
          INSERT INTO solar_requests (
            full_name, 
            email, 
            phone, 
            address, 
            city, 
            zip_code, 
            home_size, 
            electric_bill, 
            roof_type, 
            roof_age, 
            shading, 
            additional_info, 
            contact_preference, 
            created_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
        `).bind(
          data.fullName,
          data.email,
          data.phone,
          data.address,
          data.city,
          data.zipCode,
          data.homeSize,
          data.electricBill,
          data.roofType,
          data.roofAge,
          data.shading,
          data.additionalInfo || '',
          data.contactPreference,
        ).run();
      } catch (dbError) {
        console.error('Database error:', dbError);
        // Continue execution even if DB fails - we'll log the submission
      }
    }
    
    // Log the submission (for demo purposes)
    console.log('Form submission received:', {
      timestamp: new Date().toISOString(),
      ...data
    });
    
    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: "Your solar information request has been submitted successfully. A solar consultant will contact you shortly." 
    });
    
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: "There was an error processing your request. Please try again later." 
      }, 
      { status: 500 }
    );
  }
}
