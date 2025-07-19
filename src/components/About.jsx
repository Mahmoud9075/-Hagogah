import aboutImg from "../../public/about.webp";

const About = () => {
  return (
    <div className="mt-8 mb-14">
      {/* Title */}
      <div className="text-center">
        <div className="inline-flex gap-4 items-center mb-1">
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-black"></p>
          <h1 className="font-medium text-3xl sm:text-5xl md:text-6xl">
            عن حجوجة
          </h1>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-black"></p>
        </div>
        <p className="mt-7 text-lg sm:text-xl md:text-2xl">
          مرحبا بكم فى حجوجة
        </p>
      </div>

      <div className="flex justify-between items-center gap-14 mt-10 xl:flex-row flex-col-reverse">
        <img
          src={aboutImg}
          alt="/frontend/public/about.webp"
          loading="lazy"
          className="w-[600px]"
        />
        <div className="flex flex-col gap-5 text-end text-gray-600">
          <p>
            نحن هنا لنأخذكم في رحلة ممتعة وشهية في عالم الطعام الأصيل والمبتكر.
            في مطعم حجوجه، نقدم لكم لمسة من الحنين إلى طعم البيت وروح الفلاحين،
            مع لمسة من الإبداع والتجديد في كل طبق
          </p>
          <p>
            نحن نؤمن بقوة الطعام في توحيد الناس وتعزيز الروابط الاجتماعية. من
            خلال مجموعة متنوعة من الأطباق الشهية والمتوازنة، نسعى لإشباع جميع
            الأذواق وتلبية توقعات كل ضيف.
          </p>
          <p>
            تعالوا واستمتعوا في أجواء مرحة وودية، حيث يمكنكم الاستمتاع بتجربة
            تناول الطعام لا تُنسى وتبادل الضحكات والذكريات. نحن هنا لنجعل كل
            لحظة تقضونها في حجوجه تجربة فريدة ومميزة.
          </p>
          <p className="text-black font-bold">احجز مكانك في حجوجه الآن</p>
          <p>: الطريقة للحجز عبر الموقع الإلكتروني</p>
          <div className="flex flex-col gap-3 mr-3">
            <p>اختر الأيام المتاحة: تحقق من التواريخ المتاحة للحجز</p>
            <p>
              أضف عناصر القائمة: أضف العناصر المفضلة لديك، بما في ذلك الأطباق
              الخاصة والمشروبات
            </p>
            <p>
              ادفع عبر الإنترنت: انتقل إلى الخروج وادفع المبلغ الكامل لتأمين
              حجزك
            </p>
            <p>
              استمتع بتجربة فريدة: استمتع بتجربة تناول الطعام المميزة مع عائلتك
              وأصدقائك
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
