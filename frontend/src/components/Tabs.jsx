import Star from "../images/Star.jpg";
import tabsArray from "../functions/TabsArray";
import useTabState from "../functions/TabState";

export default function Tab() {
  const { activeTab, setActiveTab } = useTabState(1);

   /* Render a tab interface with two tabs: Specs and Reviews */
  return (
    <div className="flex flex-col mt-28 align-top items-center">
      <div className="flex pb-4 space-x-16 font-Inter">
        {tabsArray.map((tab) => (
          <button
            key={tab.id}
            className={`py-3 border-4 w-[32vw] ${
              activeTab === tab.id
                ? "border-[#0D4F77] bg-primary text-white text-2xl font-Inter"
                : "bg-[#D9D9D9] text-black font-semibold text-2xl font-Inter"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Specs content */}
      <div className="border-4 border-[#0D4F77] p-4 h-[86vh] w-[68vw] -mt-4">
        {tabsArray.map((tab) =>
          activeTab === tab.id ? (
            <div key={tab.id}>
              {tab.title === "Specs" ? (
                /* Reviews content */
                <div className="flex flex-row justify-center ">
                  <div className="w-1/4 pr-4 font-semibold">
                    {tab.content.left.map((item) => (
                      <p key={item} className="mb-12">
                        {item}
                      </p>
                    ))}
                  </div>

                  <div className="w-3/4">
                    {tab.content.right.map((item) => (
                      <p key={item} className="mb-11">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ) : (

                /* Reviews content */
                tab.content.map((review) => (
                  <div
                    key={review.author}
                    className="flex p-6 items-center mb-16"
                  >
                    <img
                      src={review.imageSrc}
                      alt="Author"
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div className="flex">
                      <div className="flex items-center">
                        <p className="font-Inter font-semibold text-2xl">
                          {review.author}
                        </p>
                        <div className="flex flex-row items-center ml-2">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <img
                              key={index}
                              src={Star}
                              alt="Star"
                              className="flex-row ml-2"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="flex-col ml-14 align-top items-center font-Inter">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
