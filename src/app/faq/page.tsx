"use client";

export const dynamic = "force-dynamic";

import { gql, TypedDocumentNode } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import FrequentlyAskedQuestions from "@/components/FAQ";
import type { FAQ } from "@/components/FAQ/Question";

type FAQData = {
  faqCollection: {
    items: FAQ[];
  };
};

const GET_FAQ_QUERY: TypedDocumentNode<FAQData> = gql`
  query FAQs {
    faqCollection {
      items {
        body
        title
      }
    }
  }
`;

// type FAQProps = {
//   children: React.ReactNode;
// };

const FAQ = () => {
  const { data: FAQData } = useSuspenseQuery(GET_FAQ_QUERY);

  return (
    <div>
      {/* {" "}
      {data?.faqCollection?.items?.map((item) => (
        <div key={item.title}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))} */}

      <FrequentlyAskedQuestions faqs={FAQData?.faqCollection?.items} />
    </div>
  );
};

export default FAQ;
