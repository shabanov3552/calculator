export let credCalculator = {
   borrowAmount: 1000, // Сумма кредита (от 1000 до 20к)
   paymentPeriod: 5, // Срок кредита (от 1 года до 15 лет)
   annualInterestRate: 4.95, // Годовая процентная ставка. По умолчанию 4.95  Для формулы понадобится ставка в месяц. Она рассчитывается "Годовая процентная ставка / 100 /12"
   depositDate: false, // Дата платежа увеличивающая процент если больше 3=х месяцев
   paymentMethod: 1, // способ погашения 1 = transfer, 2 = cash

   // Функция пересчета годовой процентной ставки в месячную
   convertAnnualRateInMonthly: function (percent) { return percent / 100 / 12; },

   // функция пересчета срока кредита в месяцы
   convertYearToMonth: function (years) { return years * 12 },

   // Функция расчета ежемесячного платежа
   monthlyPaymentCalc: function () {
      let s = this.borrowAmount,  // s - сумма кредита 
         r = this.convertAnnualRateInMonthly(this.annualInterestRate),  // r - процентная ставка (в месяц)
         n = this.convertYearToMonth(this.paymentPeriod);   // n - период кредитования (в месяцах)

      return s * ((r * (1 + r) ** n) / ((1 + r) ** n - 1));
   },

   // Функция расчета итоговой суммы выплат по кредиту.
   repay: function () { return this.monthlyPaymentCalc() * this.convertYearToMonth(this.paymentPeriod) },

   // Форматируем число
   formattedPrice: (num) => {
      return `£${new Intl.NumberFormat('en-GB', {
         maximumFractionDigits: 2,
         minimumFractionDigits: 2,
      }).format(num)}`;
   },

   // Устанавливает итоговые суммы на странице
   setTotalPrice: function () {
      // Проверяем проценты
      if (this.paymentMethod == 2) {
         this.depositDate ? this.annualInterestRate = 6.8 - 0.5 : this.annualInterestRate = 4.95 - 0.5
      } else {
         this.depositDate ? this.annualInterestRate = 6.8 : this.annualInterestRate = 4.95
      }
      // Выводим процент на страницу
      document.querySelector('.js-main-percent').innerHTML = `${this.annualInterestRate}%`;

      // Выводим итоговые суммы на страницу
      document.querySelector('.js-borrow-value').innerHTML = this.formattedPrice(this.borrowAmount);
      document.querySelector('.js-paymentPeriod').innerHTML = `${this.paymentPeriod} years`;
      document.querySelector('.js-monthly-payment').innerHTML = this.formattedPrice(this.monthlyPaymentCalc());
      document.querySelector('.js-borrow').innerHTML = this.formattedPrice(this.borrowAmount);
      document.querySelector('.js-repay').innerHTML = this.formattedPrice(this.repay());
   },

   // #endregion

   //========================================================================================================================================================

};

document.addEventListener("DOMContentLoaded", function (e) {

   // Добавляем в объект калькулятора форму калькулятора
   credCalculator.calcForm = document.querySelector('#calculator');

   if (credCalculator.calcForm) {
      // Ставим слушатель изменений элементов форм в калькуляторе
      credCalculator.calcForm.addEventListener('change', e => {
         const target = e.target;

         // if (target.closest('#borrow')) {
         //    credCalculator.borrowAmount = target.value
         // }

         // if (target.closest('#paymentPeriod')) {
         //    credCalculator.paymentPeriod = target.value
         // }

         if (target.name == 'paymentMethod') {
            target.value == '1' ? credCalculator.paymentMethod = 1 : credCalculator.paymentMethod = 2;
         }


         credCalculator.setTotalPrice();
      });

      // добавляем и выводим начальные суммы из формы в результат, до изменений формы
      credCalculator.setTotalPrice();
   }
});


