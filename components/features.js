import {
    AcademicCapIcon,
    BookOpenIcon,
    BriefcaseIcon,
    UserGroupIcon,
  } from "@heroicons/react/outline";
  
  const Features = () => {
    return (
      <>
        <section className="py-10 bg-white">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight text-center">
              Манай үндсэн үйл ажиллагаа
            </h2>
            <p className="mt-2 text-lg text-center text-gray-600">
              Манай компани нь одоогоор нийт 6 төрлийн үйл ажиллагаа явуулж байна.
            </p>
            <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
              <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 rounded-lg">
                <div className="p-3 text-white bg-[#1d4290] rounded-lg">
                  <AcademicCapIcon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-medium text-gray-700">
                  Япон хэлний сургалт
                </h4>
                <p className="text-base text-center text-gray-500">
                  Бүх түвшний Япон хэлний сургалт явуулж байна.
                </p>
              </div>
              <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 rounded-lg">
                <div className="p-3 text-white bg-[#1d4290] rounded-lg">
                  <BookOpenIcon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-medium text-gray-700">
                  Сургууль зуучлал
                </h4>
                <p className="text-base text-center text-gray-500">
                  Япон улсын бүх хотуудын Сургуульд зуучлана.
                </p>
              </div>
              <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 rounded-lg">
                <div className="p-3 text-white bg-[#1d4290] rounded-lg">
                  <UserGroupIcon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-medium text-gray-700">
                  Гэрээт ажилтан
                </h4>
                <p className="text-base text-center text-gray-500">
                  Япон улсад гэрээт ажилтнаар явуулж байна.
                </p>
              </div>
              <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 rounded-lg">
                <div className="p-3 text-white bg-[#1d4290] rounded-lg">
                  <BriefcaseIcon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-medium text-gray-700">
                  Үндсэн ажилтан
                </h4>
                <p className="text-base text-center text-gray-500">
                  Япон улсад үндсэн ажилтнаар явуулж байна.
                </p>
              </div>
              <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 rounded-none rounded-lg">
                <div className="p-3 text-white bg-[#1d4290] rounded-none rounded-lg">
                  <BriefcaseIcon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-medium text-gray-700">Жишээ</h4>
                <p className="text-base text-center text-gray-500">
                  Япон улсад үндсэн ажилтнаар явуулж байна.
                </p>
              </div>
              <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 rounded-none rounded-lg">
                <div className="p-3 text-white bg-[#1d4290] rounded-none rounded-lg">
                  <BriefcaseIcon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-medium text-gray-700">Жишээ</h4>
                <p className="text-base text-center text-gray-500">
                  Япон улсад үндсэн ажилтнаар явуулж байна.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Features;
  