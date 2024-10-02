import FormRow from "./FormRow";
import Input from "./Input";
import FormLabel from "./FormLabel";
import FormSelect from "./FormSelect";

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];

function BillingForm() {
  return (
    <div className="border-2 border-primary-800">
      <form className="flex flex-col gap-4">
        <FormRow>
          <FormLabel htmlFor="first_name">first name</FormLabel>
          <Input type="text" id="first_name" />
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="last_name">last name</FormLabel>
          <Input type="text" id="last_name" />
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="company_name">company name (optional)</FormLabel>
          <Input type="text" id="company_name" />
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="country">country</FormLabel>
          <FormSelect name="country" id="country">
            <option value="india">india</option>
            <input type="submit" value="submit" />
          </FormSelect>
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="street_address">street address</FormLabel>
          <Input type="text" id="street_address" />
          <Input type="text" id="street_address" />
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="city">city/town</FormLabel>
          <Input type="text" id="city" />
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="city">state</FormLabel>
          <FormSelect name="state" id="state">
            {states.map((state) => (
              <option value={state} key={state}>
                {state}
              </option>
            ))}
          </FormSelect>
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="pin_code">PIN code</FormLabel>
          <Input type="number" id="pin_code" />
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="phone">phone</FormLabel>
          <Input type="number" id="phone" />
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="email">email address</FormLabel>
          <Input type="email" id="email" />
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="order_notes">order notes (optional)</FormLabel>
          <textarea
            name="order_notes"
            id="order_notes"
            placeholder="notes about your order"
            className="border-[0.5px] border-primary-50 bg-white-50 outline-none"
            rows={8}
          />
        </FormRow>
      </form>
    </div>
  );
}

export default BillingForm;
