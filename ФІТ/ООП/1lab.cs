using System;

namespace ConsoleApp3
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Введіть значення x:");
            double x = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine("Введіть номер варіанту (1-10):");
            int variant = Convert.ToInt32(Console.ReadLine());

            double result = 0;

            switch (variant)
            {
                case 1:
                    result = CalculateVariant1(x);
                    break;
                case 2:
                    result = CalculateVariant2(x);
                    break;
                case 3:
                    result = CalculateVariant3(x);
                    break;
                case 4:
                    result = CalculateVariant4(x);
                    break;
                case 5:
                    result = CalculateVariant5(x);
                    break;
                case 6:
                    result = CalculateVariant6(x);
                    break;
                case 7:
                    result = CalculateVariant7(x);
                    break;
                case 8:
                    result = CalculateVariant8(x);
                    break;
                case 9:
                    result = CalculateVariant9(x);
                    break;
                case 10:
                    result = CalculateVariant10(x);
                    break;
                default:
                    Console.WriteLine("Невірний номер варіанту.");
                    break;
            }

            Console.WriteLine($"Результат обчислення: {result}");
            Console.ReadKey();
        }

        static double CalculateVariant1(double x)
        {
            return Math.Sin(x / 3) + (2 * x / Math.Cos(x));
        }

        static double CalculateVariant2(double x)
        {
            return 1.0 / Math.Tan(x) - Math.Acos(Math.Pow(x, 3));
        }

        static double CalculateVariant3(double x)
        {
            return Math.Pow(x, x + 3) + Math.Tan(x);
        }

        static double CalculateVariant4(double x)
        {
            return 1 + Math.Pow(1 + Math.Log10(x), 1.0 / 3);
        }

        static double CalculateVariant5(double x)
        {
            return 1.0 / Math.Atan(x - Math.PI);
        }

        static double CalculateVariant6(double x)
        {
            return Math.Sinh(Math.Sqrt(x));
        }

        static double CalculateVariant7(double x)
        {
            return Math.Pow(x, 2) + 2 * x - Math.Tanh(x / 2);
        }

        static double CalculateVariant8(double x)
        {
            return Math.Log(Math.Log(Math.Exp(x))) - 0.35;
        }

        static double CalculateVariant9(double x)
        {
            return Math.Pow(x / 2, 1.72) - Math.Tan(Math.PI - 1);
        }

        static double CalculateVariant10(double x)
        {
            return Math.Abs(Math.Log(Math.Atan(x)));
        }
    }
}
