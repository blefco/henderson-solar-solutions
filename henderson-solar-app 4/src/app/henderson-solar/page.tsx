import Link from 'next/link';

export default function HendersonSolarPage() {
  return (
    <div className="min-h-screen py-12 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkest">
              Solar Energy in Henderson, Nevada
            </h1>
            <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
              Why Henderson is one of the best places in America for solar energy
            </p>
          </div>
          
          {/* Henderson Climate Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="bg-primary-desert text-white p-6">
              <h2 className="text-2xl font-bold">Henderson's Solar-Perfect Climate</h2>
              <p className="mt-2">Ideal conditions for maximum solar energy production</p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary-desert">Sunshine Statistics</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-sun mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span><strong>294 sunny days</strong> per year (national average: 205)</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-sun mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span><strong>3,825 hours of sunshine</strong> annually (national average: 2,600)</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-sun mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span><strong>6.4 peak sun hours</strong> daily average (ideal for solar production)</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-sun mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span><strong>Only 26 rainy days</strong> per year on average</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary-desert">Climate Advantages</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-cactus mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Low humidity</strong> increases solar panel efficiency</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-cactus mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Minimal cloud cover</strong> throughout the year</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-cactus mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Mild winters</strong> with continued solar production year-round</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-cactus mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Optimal sun angle</strong> for maximum energy capture</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="p-6 bg-primary-sand/20 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-neutral-darkest">Henderson's Solar Potential</h3>
                <p className="mb-3">
                  Henderson's climate makes it one of the top locations in the United States for solar energy production. The abundant sunshine, low precipitation, and optimal sun angle create ideal conditions for solar panels to operate at maximum efficiency.
                </p>
                <p>
                  A typical 6kW solar system in Henderson can produce approximately 10,500 kWh of electricity annually—enough to offset the average household's entire electricity usage and save homeowners thousands of dollars over the system's lifetime.
                </p>
              </div>
            </div>
          </div>
          
          {/* Nevada Solar Incentives Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="bg-primary-desert text-white p-6">
              <h2 className="text-2xl font-bold">Nevada Solar Incentives</h2>
              <p className="mt-2">Financial benefits available to Henderson homeowners</p>
            </div>
            
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-desert">Federal Solar Investment Tax Credit (ITC)</h3>
                  <p className="mb-3">
                    The federal government offers a 30% tax credit for solar systems installed through 2032. For a typical Henderson home solar installation costing $20,000, this represents a $6,000 tax credit.
                  </p>
                  <div className="bg-secondary-sky/10 p-4 rounded-md">
                    <p className="font-semibold">Example Savings:</p>
                    <p>$20,000 system cost × 30% = $6,000 tax credit</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-desert">Nevada Net Metering Program</h3>
                  <p className="mb-3">
                    Nevada's net metering program allows Henderson homeowners to receive credit for excess electricity their solar systems produce and feed back to the grid. Under current regulations, NV Energy offers 75% of the retail rate for excess solar energy.
                  </p>
                  <div className="bg-secondary-sky/10 p-4 rounded-md">
                    <p className="font-semibold">How It Works:</p>
                    <p>If your retail electricity rate is $0.12/kWh, you'll receive approximately $0.09/kWh credit for excess energy your system produces.</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-desert">Property Tax Exemption</h3>
                  <p className="mb-3">
                    Nevada offers a property tax exemption for renewable energy systems, including solar. This means the added value that solar brings to your Henderson home won't increase your property taxes.
                  </p>
                  <div className="bg-secondary-sky/10 p-4 rounded-md">
                    <p className="font-semibold">Benefit:</p>
                    <p>Solar typically adds 4.1% to home value with no additional property tax burden.</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-desert">Local Utility Rebates</h3>
                  <p className="mb-3">
                    NV Energy occasionally offers rebate programs for energy efficiency upgrades, including solar installations. These programs vary by year and availability.
                  </p>
                  <div className="bg-secondary-sky/10 p-4 rounded-md">
                    <p className="font-semibold">Current Status:</p>
                    <p>Contact us for the latest information on available utility rebates in Henderson.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Nevada Solar Regulations Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="bg-primary-desert text-white p-6">
              <h2 className="text-2xl font-bold">Nevada Solar Regulations</h2>
              <p className="mt-2">What Henderson homeowners need to know</p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary-desert">Solar Access Rights</h3>
                  <p className="mb-3">
                    Nevada law protects homeowners' rights to install solar energy systems. HOAs cannot prohibit solar installations, though they may impose reasonable restrictions that don't significantly increase cost or decrease efficiency.
                  </p>
                  <p>
                    Henderson city ordinances further support these rights, ensuring homeowners can take advantage of solar energy regardless of HOA restrictions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary-desert">Permitting Process</h3>
                  <p className="mb-3">
                    The City of Henderson has streamlined the solar permitting process. Most residential solar installations can receive permits within 3-5 business days.
                  </p>
                  <p>
                    Our team handles all permitting requirements, including electrical permits, building permits, and any necessary inspections required by the city.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary-desert">Interconnection Requirements</h3>
                  <p className="mb-3">
                    To connect your solar system to the grid in Henderson, NV Energy requires an interconnection agreement. This allows your system to safely connect to the utility grid and participate in net metering.
                  </p>
                  <p>
                    Our team coordinates with NV Energy to ensure all interconnection requirements are met and your system is properly registered for net metering benefits.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary-desert">Renewable Portfolio Standard</h3>
                  <p className="mb-3">
                    Nevada has a Renewable Portfolio Standard (RPS) requiring utilities to generate 50% of their electricity from renewable sources by 2030, with a goal of 100% carbon-free energy by 2050.
                  </p>
                  <p>
                    This commitment to renewable energy creates a favorable regulatory environment for Henderson homeowners investing in solar energy.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Local Solar Installation Information */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="bg-primary-desert text-white p-6">
              <h2 className="text-2xl font-bold">Solar Installation in Henderson</h2>
              <p className="mt-2">What to expect when going solar</p>
            </div>
            
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-desert">Local Installation Expertise</h3>
                  <p>
                    Our Henderson-based solar installers understand the unique conditions of the Nevada desert. We design systems that withstand high temperatures, maximize energy production in our abundant sunshine, and comply with all local building codes and regulations.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-desert">Installation Timeline</h3>
                  <p className="mb-3">
                    The typical solar installation process in Henderson takes 2-3 months from signing to activation:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-primary-sun rounded-full flex items-center justify-center text-white font-bold mr-3 mt-0.5 flex-shrink-0">1</div>
                      <div>
                        <p className="font-semibold">Site Assessment & Design (1-2 weeks)</p>
                        <p className="text-neutral-dark">Professional evaluation of your roof, electrical system, and energy needs</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-primary-sun rounded-full flex items-center justify-center text-white font-bold mr-3 mt-0.5 flex-shrink-0">2</div>
                      <div>
                        <p className="font-semibold">Permitting (2-3 weeks)</p>
                        <p className="text-neutral-dark">Securing necessary permits from the City of Henderson</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-primary-sun rounded-full flex items-center justify-center text-white font-bold mr-3 mt-0.5 flex-shrink-0">3</div>
                      <div>
                        <p className="font-semibold">Installation (1-2 days)</p>
                        <p className="text-neutral-dark">Professional installation of solar panels and equipment</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-primary-sun rounded-full flex items-center justify-center text-white font-bold mr-3 mt-0.5 flex-shrink-0">4</div>
                      <div>
                        <p className="font-semibold">City Inspection (1-2 weeks)</p>
                        <p className="text-neutral-dark">Official inspection to ensure code compliance</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-primary-sun rounded-full flex items-center justify-center text-white font-bold mr-3 mt-0.5 flex-shrink-0">5</div>
                      <div>
                        <p className="font-semibold">Utility Connection (2-3 weeks)</p>
                        <p className="text-neutral-dark">NV Energy installs net meter and grants permission to operate</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-desert">Henderson-Specific Considerations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Desert Climate Adaptations</h4>
                      <p>
                        Our installations include heat-resistant wiring, elevated mounting to improve airflow and cooling, and high-efficiency panels that perform well in high temperatures.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Roof Types</h4>
                      <p>
                        We have extensive experience with all common Henderson roof types, including tile, shingle, and flat roofs, using specialized mounting systems for each.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/request" 
              className="btn btn-primary text-center px-8 py-4 rounded-md text-lg font-semibold inline-block"
            >
              Request Your Free Solar Consultation
            </Link>
            <p className="mt-4 text-neutral-dark">
              Find out how Henderson's perfect solar conditions can help you save on electricity costs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
