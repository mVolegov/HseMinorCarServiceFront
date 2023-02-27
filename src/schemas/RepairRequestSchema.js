import * as yup from "yup";

export const repairRequestSchema = yup.object().shape({
  carOwnerName: yup.string().required("Введите ФИО владельца"),
  carOwnerContactInfo: yup.string().required("Введите контактные данные"),
  carName: yup.string().required("Введите название ТС"),
  carManufactureYear: yup.number().positive("Год не может быть отрицательным").min(1886).integer().required("Введите год выпуска"),
  carMileage: yup.number().positive("Пробег не может быть отрицательным или нулевым").integer().required("Введите пробег"),
  carColor: yup.string().required("Введите цвет"),
  carLicensePlateNumber: yup.string().required("Введите гос. номер"),
  appealReason: yup.string().required("Введите причину обращения"),
  declaredWorks: yup.string().required("Введите заявленные работы"),
  totalPriceOfWorks: yup.number().positive("Стоимость не может быть отрицательной или нулевой").required("Введите стоимость работ")
});
