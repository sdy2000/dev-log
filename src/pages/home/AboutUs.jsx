const AboutUs = () => {
  return (
    <>
      <div className="relative w-full h-96">
        <img
          className="w-full h-full object-cover"
          src="./assets/img/about-us-banner.png"
          alt="About us banner"
        />
      </div>
      <div className="my-8 mx-2 md:mx-36 lg:mx-48 xl:mx-auto max-w-4xl">
        <div className="bg-lbp dark:bg-dbp  py-8 px-3 flex flex-col justify-center items-center gap-6 rounded-2xl shadow-lg">
          <h1 className="text-lfp dark:text-dfp text-3xl font-bold">
            About DEVLog
          </h1>
          <p className="text-lfp dark:text-dfs max-w-2xl text-center text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            beatae error. Odio quibusdam pariatur, excepturi magni quod illo.
            Sed officia ipsam voluptates inventore ratione molestias nostrum
            quos ex perferendis earum! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quam, beatae error. Odio quibusdam pariatur,
            excepturi magni quod illo. Sed officia ipsam voluptates inventore
            ratione molestias Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quam, beatae error. Odio quibusdam pariatur, excepturi magni
            quod illo. Sed officia ipsam voluptates inventore ratione molestias
            nostrum quos ex perferendis earum! nostrum quos ex perferendis
            earum!
          </p>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
