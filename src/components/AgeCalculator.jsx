const AgeCalculator = () => {
  let oneDay = 1000 * 60 * 60 * 24;
  let born = new Date("09/04/1996");
  let age = new Date();

  let birthYear = born.getFullYear();
  let birthMonth = born.getMonth() + 1;
  let birthDate = born.getDate();

  let currentYear = age.getFullYear();
  let currentMonth = age.getMonth() + 1;
  let currentDate = age.getDate();

  const year =
    birthMonth > currentMonth
      ? currentYear - 1 - birthYear
      : currentYear - birthYear;

  const month =
    birthMonth < currentMonth
      ? currentMonth - birthMonth
      : 12 + currentMonth - birthMonth;

  const day =
    currentDate > birthDate
      ? currentDate - birthDate
      : currentDate + 30 - birthdate;

  return (
    <div>
      <p>
        My Age is {year} Year {month} month {day} day
      </p>
    </div>
  );
};

export default AgeCalculator;
