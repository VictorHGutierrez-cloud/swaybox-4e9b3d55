import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const pricingData = [
  {
    scenario: "Bundle (MDM + SaaS Management) only",
    employees: 200,
    monthlyPrice: "€2,300",
    pricePerEmployee: "€11.50",
    discountedPrice: "€1,610",
    discountedPerEmployee: "€8.05",
    recommended: true,
  },
  {
    scenario: "Bundle (MDM + SaaS Management) + ThreatDown EDR",
    employees: 200,
    monthlyPrice: "€3,100",
    pricePerEmployee: "€15.50",
    discountedPrice: "€2,170",
    discountedPerEmployee: "€10.85",
    recommended: false,
  },
  {
    scenario: "Bundle (MDM + SaaS Management) + SentinelOne Control",
    employees: 200,
    monthlyPrice: "€3,300",
    pricePerEmployee: "€16.50",
    discountedPrice: "€2,310",
    discountedPerEmployee: "€11.55",
    recommended: false,
  },
  {
    scenario: "Bundle (MDM + SaaS Management) + SentinelOne Complete",
    employees: 200,
    monthlyPrice: "€4,100",
    pricePerEmployee: "€20.50",
    discountedPrice: "€2,870",
    discountedPerEmployee: "€14.35",
    recommended: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 lg:py-40 bg-industrial text-white px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-4">Investment</h2>
        <p className="text-2xl md:text-3xl font-light mb-6 max-w-2xl">Transparent pricing for complete IT management</p>
        <p className="text-lg opacity-70 mb-12 max-w-2xl">
          All plans include the full bundle: ITAM, Software License Management, Cost Tracking, IT Support, Cloud
          Services, and Implementation.
        </p>

        {/* Desktop Table */}
        <div className="hidden md:block border border-white/20 rounded-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-white/20 hover:bg-white/5">
                <TableHead className="text-white/60 font-normal">Scenario</TableHead>
                <TableHead className="text-white/60 font-normal text-center">Employees</TableHead>
                <TableHead className="text-white/60 font-normal text-center">Monthly Price</TableHead>
                <TableHead className="text-white/60 font-normal text-center">Per Employee</TableHead>
                <TableHead className="text-white/60 font-normal text-center bg-white/5">
                  <div className="flex flex-col">
                    <span className="text-xs text-white/40">30% Discount</span>
                    <span>This Week</span>
                  </div>
                </TableHead>
                <TableHead className="text-white/60 font-normal text-center bg-white/5">
                  <div className="flex flex-col">
                    <span className="text-xs text-white/40">Discounted</span>
                    <span>Final Price Per Employee</span>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingData.map((row, index) => (
                <TableRow
                  key={index}
                  className={`border-white/10 hover:bg-white/5 ${row.recommended ? "bg-white/10" : ""}`}
                >
                  <TableCell className="font-medium text-white">
                    <div className="flex items-center gap-3">
                      {row.scenario}
                      {row.recommended && (
                        <span className="text-xs px-2 py-1 bg-white text-dark-craft rounded-sm">Recommended</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-white/80">{row.employees}</TableCell>
                  <TableCell className="text-center text-white/80">{row.monthlyPrice}</TableCell>
                  <TableCell className="text-center text-white/80">{row.pricePerEmployee}</TableCell>
                  <TableCell className="text-center text-white font-medium bg-white/5">{row.discountedPrice}</TableCell>
                  <TableCell className="text-center text-white font-medium bg-white/5">
                    {row.discountedPerEmployee}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {pricingData.map((row, index) => (
            <div key={index} className={`border border-white/20 p-6 ${row.recommended ? "bg-white/10" : ""}`}>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-medium">{row.scenario}</h3>
                {row.recommended && (
                  <span className="text-xs px-2 py-1 bg-white text-dark-craft rounded-sm">Recommended</span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-white/50 mb-1">Monthly Price</p>
                  <p className="text-white/80">{row.monthlyPrice}</p>
                </div>
                <div>
                  <p className="text-white/50 mb-1">Per Employee</p>
                  <p className="text-white/80">{row.pricePerEmployee}</p>
                </div>
                <div className="bg-white/5 p-3 -mx-3">
                  <p className="text-white/50 mb-1 text-xs">30% Discount (This Week)</p>
                  <p className="text-white font-medium">{row.discountedPrice}</p>
                </div>
                <div className="bg-white/5 p-3 -mx-3">
                  <p className="text-white/50 mb-1 text-xs">Final Price Per Employee</p>
                  <p className="text-white font-medium">{row.discountedPerEmployee}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm opacity-50 mt-8 text-center">
          All prices in EUR. 30% discount valid for contracts signed this week.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
