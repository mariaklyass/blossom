import ContentWrapper from "@/components/ContentWrapper";
import HeadingTwo from "@/components/HeadingTwo";
import Question from "./Question";

import type { FAQ } from "./Question";

type FrequentlyAskedQuestionsProps = {
  faqs?: FAQ[];
};

const FrequentlyAskedQuestions = (props: FrequentlyAskedQuestionsProps) => {
  const { faqs = [] } = props;

  return (
    <section className="w-full bg-green-100 p-8 lg:p-16" id="faqs">
      <ContentWrapper>
        <div className="flex flex-col w-full">
          <HeadingTwo className="mt-0">Frequently Asked Questions</HeadingTwo>

          <p className="mt-8">
            We understand that choosing the perfect floral arrangements can
            sometimes be overwhelming. To assist you in your decision-making
            process, we&apos;ve compiled a list of frequently asked questions.
            Whether you&apos;re wondering about the suitability of certain
            flowers for an event, need guidance on caring for your blooms, or
            have questions about our delivery options, our comprehensive FAQ
            section is here to provide you with the information you need, saving
            you time and ensuring a seamless experience with Blossom Haven.
          </p>

          <div className="flex flex-col mt-8">
            {faqs.map((faq, i) => (
              <Question className="border-b" key={i} title={faq.title}>
                {faq.body}
              </Question>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default FrequentlyAskedQuestions;
