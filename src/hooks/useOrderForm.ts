import { Dispatch, FormEvent, SetStateAction, useState } from "react";

type DefaultState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  occasion: string;
  details: string;
  loading: boolean;
  success: boolean;
  error: string;
};

const submitForm = async (
  state: DefaultState,
  setState: Dispatch<SetStateAction<DefaultState>>
) => {
  const { firstName, lastName, email, phone, occasion, details } = state;

  setState((prevState) => {
    return {
      ...prevState,
      error: "",
      loading: true,
      success: false,
    };
  });

  const response = await fetch("/api/orderRequest", {
    method: "POST",
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      phone,
      occasion,
      details,
    }),
  });

  const data = await response.json();
  const { error, entry } = data;
  console.log(data, error);

  setState((prevState) => {
    return {
      ...prevState,
      error: error || "",
      loading: false,
      success: entry ? true : false,
    };
  });
};

const defaultState: DefaultState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  occasion: "",
  details: "",
  loading: false,
  success: false,
  error: "",
};

function useOrderForm() {
  const [state, setState] = useState(defaultState);

  return {
    callbacks: {
      setState: (newState: Partial<DefaultState>) => {
        setState((prevState) => {
          return {
            ...prevState,
            ...newState,
          };
        });
      },
      submitForm: (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        submitForm(state, setState);
      },
    },
    state,
  };
}
export default useOrderForm;
