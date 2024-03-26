"use client";

import useOrderForm from "@/hooks/useOrderForm";
import ContentWrapper from "@/components/ContentWrapper";
import FieldLabel from "@/components/Forms/FieldLabel";
import FormRow from "@/components/Forms/FormRow";
import Input from "@/components/Forms/Input";
import Select from "@/components/Forms/Select";
import Button from "@/components/Button";
import HeadingTwo from "../HeadingTwo";

const OrderForm = () => {
  const orderFormPayload = useOrderForm();

  const {
    callbacks: { setState, submitForm },
    state: {
      email,
      phone,
      firstName,
      lastName,
      occasion,
      details,
      loading,
      success,
      error,
    },
  } = orderFormPayload;

  if (success) {
    return (
      <section className="w-full p-8 lg:p-16">
        <ContentWrapper>
          <div className="w-full">
            <HeadingTwo>Thank you for submitting your order!</HeadingTwo>
            <p className="mt-8">We will be in touch shortly.</p>
          </div>
        </ContentWrapper>
      </section>
    );
  }

  return (
    <section className="w-full p-8 lg:p-16" id="order-form">
      <ContentWrapper className="flex-col">
        <h2 className="mt-0 mb-8">New Order</h2>

        <form className="w-full" onSubmit={submitForm}>
          {!!error && (
            <FormRow>
              <div className="p-4 bg-light-green/70 text-black/80 rounded-xl">
                {error}
              </div>
            </FormRow>
          )}

          <h3 className="mt-0 mb-8">Contact Details</h3>
          <FormRow>
            <div className="w-full md:w-1/2 px-3">
              <FieldLabel htmlFor="firstName">* First Name</FieldLabel>
              <Input
                id="firstName"
                onChange={(e) => {
                  setState({ firstName: e.target.value });
                }}
                required
                value={firstName}
              />
            </div>

            <div className="w-full md:w-1/2 px-3 -mb-6">
              <FieldLabel htmlFor="lastName">* Last Name</FieldLabel>
              <Input
                id="lastName"
                onChange={(e) => {
                  setState({ lastName: e.target.value });
                }}
                required
                value={lastName}
              />
            </div>
          </FormRow>

          <FormRow>
            <div className="w-full md:w-1/2 px-3">
              <FieldLabel htmlFor="email">* Email</FieldLabel>
              <Input
                id="email"
                onChange={(e) => {
                  setState({ email: e.target.value });
                }}
                required
                value={email}
              />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <FieldLabel htmlFor="phone">* Phone</FieldLabel>
              <Input
                id="phone"
                onChange={(e) => {
                  setState({ phone: e.target.value });
                }}
                required
                value={phone}
              />
            </div>
          </FormRow>

          <h3 className="mt-0 mb-8">Order Details</h3>
          <FormRow>
            <div className="w-full md:w-1/2 px-3 -mb-6">
              <FieldLabel htmlFor="industry">* Occasion</FieldLabel>
              <Select
                id="industry"
                onChange={(e) => {
                  setState({ occasion: e.target.value });
                }}
                required
                value={occasion}
              >
                <option value="">Please Select...</option>
                <option value="Congratulations">Congratulations</option>
                <option value="Gratitude">Gratitude</option>
                <option value="Birthday">Birthday</option>
                <option value="Wedding">Wedding</option>
                <option value="Romance">Romance</option>
                <option value="Getwell">Get-well bouquet</option>
                <option value="Funeral">Funeral</option>
                <option value="Other">Other</option>
              </Select>
            </div>
          </FormRow>

          <FormRow>
            <div className="w-full px-3">
              <FieldLabel htmlFor="details">
                * Preffered flowers and color pallette and any other significant
                details
              </FieldLabel>
              <Input
                id="details"
                onChange={(e) => {
                  setState({ details: e.target.value });
                }}
                required
                value={details}
              />
            </div>
          </FormRow>

          <FormRow className="pl-3">
            <Button
              className="p-4 lg:p-8"
              size="md"
              theme={loading ? "inactive" : "primary-green-outline"}
              as="button"
              disabled={loading}
              type="submit"
            >
              {loading ? "Sending..." : "Submit"}
            </Button>
          </FormRow>
        </form>
      </ContentWrapper>
    </section>
  );
};

export default OrderForm;
