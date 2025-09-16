import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const MessageSection = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    });

    const secondMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });

    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,

      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        scrub: true,
        end: "30% center",
      },
    });

    gsap.to(secondMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,

      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        scrub: true,
        end: "bottom center",
      },
    });
  });

  return (
    <section className="message-content">
      <div className="container mx-auto relative flex-center py-28">
        <div className="h-full w-full">
          <div className="msg-wrapper">
            <h1 className="first-message">Stir up your fearless past and</h1>

            <div className="msg-text-scroll">
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className="text-red-brown">Fuel Up</h2>
              </div>
            </div>

            <h1 className="second-message">
              your future with every gulp of Perfect Protein
            </h1>
          </div>

          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-hidden">
              <p>
                Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you’re one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
