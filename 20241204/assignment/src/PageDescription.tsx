import { banner_bg01 } from "./assets/assets";

export default function () {
  return (
    <article>
      <section
        className="flex items-center min-h-screen px-4 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${banner_bg01})` }}
      >
        <div className="container flex flex-col justify-center h-full mx-auto font-bold text-white poppins">
          <h3 className="text-[18px] xs:text-[20px] sm:text-[30px] text-yellow-300">
            SUFLIX
          </h3>
          <h2 className="text-[25px] xs:text-[40px] sm:text-[60px] mb-4">
            Unlimited <span className="text-yellow-500">Movie</span>,
            <br />
            TVs SHows, & <span className="text-rose-500">Infinite</span>
          </h2>
          <p className="text-xl sm:text-2xl">
            An activity where all the movies in the world come together
          </p>
        </div>
      </section>
    </article>
  );
}
