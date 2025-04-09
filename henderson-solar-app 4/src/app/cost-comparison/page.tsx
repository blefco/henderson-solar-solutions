import Link from 'next/link';

export default function CostComparisonPage() {
  return (
    <div className="min-h-screen py-12 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-darkest">
              Why Pay Full Price for Electricity?
            </h1>
            <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
              See how much you could save by switching to solar energy in Henderson, Nevada
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="bg-primary-desert text-white p-6">
              <h2 className="text-2xl font-bold">Electricity Cost Comparison</h2>
              <p className="mt-2">Traditional utility vs. solar energy for Henderson homeowners</p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-neutral-medium rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-neutral-darkest">Traditional Utility</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold">Average Monthly Bill</p>
                      <p className="text-2xl font-bold text-error">$150-$250</p>
                      <p className="text-sm text-neutral-dark">Varies by season and usage</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Annual Cost</p>
                      <p className="text-2xl font-bold text-error">$1,800-$3,000</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">10-Year Cost</p>
                      <p className="text-2xl font-bold text-error">$22,000-$36,000+</p>
                      <p className="text-sm text-neutral-dark">Assuming 2-3% annual rate increases</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">25-Year Cost</p>
                      <p className="text-2xl font-bold text-error">$65,000-$105,000+</p>
                      <p className="text-sm text-neutral-dark">Continuing to pay full price for electricity</p>
                    </div>
                    
                    <div className="pt-4">
                      <h4 className="font-semibold mb-2">Disadvantages</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-error mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span>Unpredictable rate increases</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-error mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span>No protection from rising costs</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-error mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span>No return on investment</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-error mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span>Environmental impact</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="border border-primary-sun rounded-lg p-6 bg-neutral-light">
                  <h3 className="text-xl font-bold mb-4 text-primary-desert">Solar Energy</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold">Average Monthly Bill</p>
                      <p className="text-2xl font-bold text-success">$0-$50</p>
                      <p className="text-sm text-neutral-dark">After system is paid off</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Annual Cost</p>
                      <p className="text-2xl font-bold text-success">$0-$600</p>
                      <p className="text-sm text-neutral-dark">Many homeowners eliminate their bill entirely</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">System Cost</p>
                      <p className="text-2xl font-bold">$15,000-$25,000</p>
                      <p className="text-sm text-neutral-dark">After 30% federal tax credit</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">25-Year Savings</p>
                      <p className="text-2xl font-bold text-success">$40,000-$80,000+</p>
                      <p className="text-sm text-neutral-dark">Compared to traditional utility costs</p>
                    </div>
                    
                    <div className="pt-4">
                      <h4 className="font-semibold mb-2">Advantages</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Fixed energy costs</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Protection from utility rate increases</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Increased home value</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Clean, renewable energy</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-primary-sand/20 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-neutral-darkest">Why Henderson Homeowners Choose Solar</h3>
                <p className="mb-4">
                  With Nevada's abundant sunshine and rising utility rates, solar energy is the smart financial choice for Henderson homeowners. Most solar systems pay for themselves within 7-10 years, providing decades of free electricity afterward.
                </p>
                <p className="mb-4">
                  When you consider that the average Henderson homeowner will spend $65,000-$105,000 on electricity over 25 years (with continued rate increases), investing in a solar system that costs $15,000-$25,000 after incentives makes perfect financial sense.
                </p>
                <p className="font-bold">
                  Why pay full price for electricity when the Nevada sun can power your home for free?
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/request" 
              className="btn btn-primary text-center px-8 py-4 rounded-md text-lg font-semibold inline-block"
            >
              Get Your Free Solar Quote
            </Link>
            <p className="mt-4 text-neutral-dark">
              Find out exactly how much you could save with a custom solar solution for your Henderson home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
