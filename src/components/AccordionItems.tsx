import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionItems(){

	return (
		    <Accordion  type="single" collapsible >
                      <AccordionItem value="item-1">
                        <AccordionTrigger>What makes House of Susthira different from other saree brands?</AccordionTrigger>
                        <AccordionContent>
                                    House of Susthira is committed to sustainability and ethical practices throughout our entire supply chain. We prioritize responsibly sourced materials, fair wages for artisans, and environmentally friendly production methods.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger>Are your sarees handwoven?</AccordionTrigger>
                        <AccordionContent>
				   Yes, many of our sarees feature handwoven fabrics crafted by skilled artisans. We believe in preserving traditional craftsmanship while also offering contemporary designs.
                        </AccordionContent>
                      </AccordionItem>
		      
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
                        <AccordionContent>
				Yes, we do ship internationally.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger>How can I care for my saree to ensure its longevity?</AccordionTrigger>
                        <AccordionContent>
				We provide care instructions with each saree to help you maintain its beauty and quality. Generally, we recommend handwashing with mild detergent and air drying to preserve he fabric and colors. 
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-5">
                        <AccordionTrigger>Do you have a physical store where I can view and purchase sarees?</AccordionTrigger>
                        <AccordionContent>
				Yes, we have a studio in Noida where you can try on sarees by appointment.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-6">
                        <AccordionTrigger>What is the estimated delivery time?</AccordionTrigger>
                        <AccordionContent>
				Delivery times depend on your location and the type of product you order. For catalogue products, we offer same-day delivery in Delhi NCR. If youapos;re elsewhere in India, delivery will take 3-5 days, and for international orders, expect 9-14 days.
For customized products, we need extra time to design and develop your order. Depending on the complexity of the design, this can take between 3 to 30 days.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-7">
                        <AccordionTrigger>Are there any shipping charges?</AccordionTrigger>
                        <AccordionContent>
				Shipping within Delhi NCR is free. For deliveries outside Delhi NCR, there is a flat shipping charge of ₹150. International shipping charges will vary depending on the destination country.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-8">
                        <AccordionTrigger>Do you accept Cash on Delivery?</AccordionTrigger>
                        <AccordionContent>
				Yes, we accept Cash on Delivery, but currently only within Delhi NCR. We plan to offer this option for other areas soon.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>


	)

}

