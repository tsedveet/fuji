const Content1 = () => {
  return (
    <>
      <section className="relative w-full bg-white">
        <div className="absolute w-full h-32 bg-gradient-to-b from-gray-100 to-white" />
        <div className="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
          <h1 className="mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3">
            <a href="#_">Япон хэлний сургалт</a>
          </h1>
          <p className="text-lg font-medium text-gray-500 sm:text-2xl">
            Удахгүй эхлэх сургалтууд
          </p>
          <div className="grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
            <div className="relative flex flex-col items-start justify-end h-full col-span-9 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
              <a
                href="#_"
                className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"
                style={{
                  backgroundImage: 'url("n5.jpg")',
                }}
              ></a>
              <div className="relative z-20 w-full h-auto py-8 text-white bg-purple-500 border-t-0 border-yellow-200 px-7">
                <a
                  href="#_"
                  className="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-purple-500 bg-white"
                >
                  N5 түвшин
                </a>
                <h2 className="mb-5 text-3xl font-bold">
                  <a href="#_">N5 түвшний сургалт</a>
                </h2>
                <p className="mb-2 text-lg font-normal text-purple-100 opacity-100">
                  Quench satisfying designs to help you stir up emotion and tell
                  a story.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col justify-center items-start  h-full col-span-9 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
              <a
                href="#_"
                className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"
                style={{
                  backgroundImage: 'url("n4.jpg")',
                }}
              ></a>
              <div className="relative z-20 w-full h-auto py-8 text-white bg-blue-400 border-t-0 border-yellow-200 px-7">
                <a
                  href="#_"
                  className="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-blue-500 bg-white"
                >
                  N4 түвшин
                </a>
                <h2 className="mb-5 text-3xl font-bold">
                  <a href="#_">N4 түвшний сургалт</a>
                </h2>
                <p className="mb-2 text-lg font-normal text-blue-100 opacity-100">
                  Living a healthier lifestyle will help with your productivity
                  and your mind-set.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col items-start justify-center h-full col-span-9 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 sm:flex-row xl:flex-col">
              <a
                href="#_"
                className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"
                style={{
                  backgroundImage: 'url("n3.jpg")',
                }}
              />
              <div className="relative z-20 flex flex-col items-start justify-center w-full h-auto py-8 text-white bg-yellow-400 border-t-0 border-yellow-200 sm:h-full xl:h-auto px-7">
                <a
                  href="#_"
                  className="inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-yellow-400 bg-white"
                >
                  N3 түвшин
                </a>
                <h2 className="mb-5 text-3xl font-bold">
                  <a href="#_">N3 түвшний сургалт</a>
                </h2>
                <p className="mb-2 text-lg font-normal opacity-100 text-yellow-50">
                  Learn about the evolution of gaming and how it started a
                  revolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content1;
