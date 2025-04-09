'use client';

import { useState } from 'react';
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

type FormData = z.infer<typeof formSchema>;

export default function SolarRequestForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Henderson', // Default to Henderson
    zipCode: '',
    homeSize: '',
    electricBill: '',
    roofType: '',
    roofAge: '',
    shading: '',
    additionalInfo: '',
    contactPreference: 'email',
    termsAccepted: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Henderson area zip codes
  const hendersonZipCodes = ['89002', '89011', '89012', '89014', '89015', '89016', '89044', '89052', '89053', '89074', '89077'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    try {
      formSchema.parse(formData);
      
      // Additional validation for Henderson zip codes
      if (!hendersonZipCodes.includes(formData.zipCode)) {
        return {
          zipCode: "Please enter a valid Henderson area zip code"
        };
      }
      
      return {};
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
        return fieldErrors;
      }
      return { form: "Validation failed" };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitError('');
      
      try {
        // In a real application, this would be an API call
        // For now, we'll simulate a successful submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setSubmitSuccess(true);
        // Reset form after successful submission
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          address: '',
          city: 'Henderson',
          zipCode: '',
          homeSize: '',
          electricBill: '',
          roofType: '',
          roofAge: '',
          shading: '',
          additionalInfo: '',
          contactPreference: 'email',
          termsAccepted: false
        });
      } catch (error) {
        setSubmitError('There was an error submitting your request. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="solar-form-container p-4 bg-neutral-light rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-primary-desert">Solar Information Request</h2>
      
      {submitSuccess ? (
        <div className="alert alert-success">
          <h3 className="font-bold">Thank you for your interest in solar energy!</h3>
          <p>Your request has been submitted successfully. A solar consultant will contact you shortly to discuss solar options for your Henderson home.</p>
          <button 
            className="btn btn-primary mt-4"
            onClick={() => setSubmitSuccess(false)}
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {submitError && (
            <div className="alert alert-danger">
              {submitError}
            </div>
          )}
          
          <div className="form-section">
            <h3 className="text-xl font-semibold mb-4 text-neutral-darkest">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">Full Name*</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`form-control ${errors.fullName ? 'border-destructive' : ''}`}
                  placeholder="John Doe"
                />
                {errors.fullName && <p className="text-destructive text-sm mt-1">{errors.fullName}</p>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control ${errors.email ? 'border-destructive' : ''}`}
                  placeholder="johndoe@example.com"
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`form-control ${errors.phone ? 'border-destructive' : ''}`}
                  placeholder="(702) 123-4567"
                />
                {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <div className="form-group">
                <label htmlFor="contactPreference" className="form-label">Preferred Contact Method*</label>
                <select
                  id="contactPreference"
                  name="contactPreference"
                  value={formData.contactPreference}
                  onChange={handleChange}
                  className={`form-select ${errors.contactPreference ? 'border-destructive' : ''}`}
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="text">Text Message</option>
                </select>
                {errors.contactPreference && <p className="text-destructive text-sm mt-1">{errors.contactPreference}</p>}
              </div>
            </div>
          </div>
          
          <div className="form-section">
            <h3 className="text-xl font-semibold mb-4 text-neutral-darkest">Property Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label htmlFor="address" className="form-label">Street Address*</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`form-control ${errors.address ? 'border-destructive' : ''}`}
                  placeholder="123 Desert Sun Dr"
                />
                {errors.address && <p className="text-destructive text-sm mt-1">{errors.address}</p>}
              </div>
              
              <div className="form-group">
                <label htmlFor="city" className="form-label">City*</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`form-control ${errors.city ? 'border-destructive' : ''}`}
                  disabled
                />
                <p className="text-muted-foreground text-sm mt-1">Service area limited to Henderson, Nevada</p>
              </div>
              
              <div className="form-group">
                <label htmlFor="zipCode" className="form-label">Zip Code*</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className={`form-control ${errors.zipCode ? 'border-destructive' : ''}`}
                  placeholder="89012"
                />
                {errors.zipCode && <p className="text-destructive text-sm mt-1">{errors.zipCode}</p>}
                <p className="text-muted-foreground text-sm mt-1">Henderson area zip codes: 89002, 89011, 89012, 89014, 89015, 89016, 89044, 89052, 89053, 89074, 89077</p>
              </div>
              
              <div className="form-group">
                <label htmlFor="homeSize" className="form-label">Home Size (sq ft)*</label>
                <select
                  id="homeSize"
                  name="homeSize"
                  value={formData.homeSize}
                  onChange={handleChange}
                  className={`form-select ${errors.homeSize ? 'border-destructive' : ''}`}
                >
                  <option value="">Select home size</option>
                  <option value="under1000">Under 1,000 sq ft</option>
                  <option value="1000-1500">1,000 - 1,500 sq ft</option>
                  <option value="1501-2000">1,501 - 2,000 sq ft</option>
                  <option value="2001-2500">2,001 - 2,500 sq ft</option>
                  <option value="2501-3000">2,501 - 3,000 sq ft</option>
                  <option value="3001-3500">3,001 - 3,500 sq ft</option>
                  <option value="3501-4000">3,501 - 4,000 sq ft</option>
                  <option value="over4000">Over 4,000 sq ft</option>
                </select>
                {errors.homeSize && <p className="text-destructive text-sm mt-1">{errors.homeSize}</p>}
              </div>
            </div>
          </div>
          
          <div className="form-section">
            <h3 className="text-xl font-semibold mb-4 text-neutral-darkest">Energy & Roof Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label htmlFor="electricBill" className="form-label">Average Monthly Electric Bill*</label>
                <select
                  id="electricBill"
                  name="electricBill"
                  value={formData.electricBill}
                  onChange={handleChange}
                  className={`form-select ${errors.electricBill ? 'border-destructive' : ''}`}
                >
                  <option value="">Select average bill</option>
                  <option value="under100">Under $100</option>
                  <option value="100-150">$100 - $150</option>
                  <option value="151-200">$151 - $200</option>
                  <option value="201-250">$201 - $250</option>
                  <option value="251-300">$251 - $300</option>
                  <option value="301-350">$301 - $350</option>
                  <option value="351-400">$351 - $400</option>
                  <option value="over400">Over $400</option>
                </select>
                {errors.electricBill && <p className="text-destructive text-sm mt-1">{errors.electricBill}</p>}
              </div>
              
              <div className="form-group">
                <label htmlFor="roofType" className="form-label">Roof Type*</label>
                <select
                  id="roofType"
                  name="roofType"
                  value={formData.roofType}
                  onChange={handleChange}
                  className={`form-select ${errors.roofType ? 'border-destructive' : ''}`}
                >
                  <option value="">Select roof type</option>
                  <option value="asphalt">Asphalt Shingles</option>
                  <option value="tile">Tile</option>
                  <option value="metal">Metal</option>
                  <option value="flat">Flat/Low Slope</option>
                  <option value="other">Other</option>
                  <option value="unknown">Not Sure</option>
                </select>
                {errors.roofType && <p className="text-destructive text-sm mt-1">{errors.roofType}</p>}
              </div>
              
              <div className="form-group">
                <label htmlFor="roofAge" className="form-label">Roof Age*</label>
                <select
                  id="roofAge"
                  name="roofAge"
                  value={formData.roofAge}
                  onChange={handleChange}
                  className={`form-select ${errors.roofAge ? 'border-destructive' : ''}`}
                >
                  <option value="">Select roof age</option>
                  <option value="0-5">0-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="11-15">11-15 years</option>
                  <option value="16-20">16-20 years</option>
                  <option value="over20">Over 20 years</option>
                  <option value="unknown">Not Sure</option>
                </select>
                {errors.roofAge && <p className="text-destructive text-sm mt-1">{errors.roofAge}</p>}
              </div>
              
              <div className="form-group">
                <label htmlFor="shading" className="form-label">Roof Shading*</label>
                <select
                  id="shading"
                  name="shading"
                  value={formData.shading}
                  onChange={handleChange}
                  className={`form-select ${errors.shading ? 'border-destructive' : ''}`}
                >
                  <option value="">Select amount of shading</option>
                  <option value="none">No Shade</option>
                  <option value="light">Light Shade (Morning or Evening)</option>
                  <option value="partial">Partial Shade (Few Hours)</option>
                  <option value="heavy">Heavy Shade (Most of Day)</option>
                  <option value="unknown">Not Sure</option>
                </select>
                {errors.shading && <p className="text-destructive text-sm mt-1">{errors.shading}</p>}
              </div>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="additionalInfo" className="form-label">Additional Information (Optional)</label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="form-control"
              rows={4}
              placeholder="Please share any additional information that might help us better understand your solar needs."
            ></textarea>
          </div>
          
          <div className="form-group">
            <div className="form-check">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className={`form-check-input ${errors.termsAccepted ? 'border-destructive' : ''}`}
              />
              <label htmlFor="termsAccepted" className="form-label ml-2">
                I agree to the <a href="#" className="text-secondary-deep-sky">Terms and Conditions</a> and consent to be contacted about solar options for my home.*
              </label>
            </div>
            {errors.termsAccepted && <p className="text-destructive text-sm mt-1">{errors.termsAccepted}</p>}
          </div>
          
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary w-full md:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Request Solar Information'}
            </button>
          </div>
          
          <p className="text-muted-foreground text-sm">* Required fields</p>
        </form>
      )}
    </div>
  );
}
