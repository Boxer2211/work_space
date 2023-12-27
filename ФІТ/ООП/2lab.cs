using System;

class GeometricObject
{
    private int variantNumber;
    private string taskDescription;

    public GeometricObject(int variantNumber, string taskDescription)
    {
        this.variantNumber = variantNumber;
        this.taskDescription = taskDescription;
    }

    ~GeometricObject()
    {
        
    }

    public void SetVariantNumber(int variantNumber)
    {
        this.variantNumber = variantNumber;
    }

    public void SetTaskDescription(string taskDescription)
    {
        this.taskDescription = taskDescription;
    }

    public int GetVariantNumber()
    {
        return variantNumber;
    }

    public string GetTaskDescription()
    {
        return taskDescription;
    }

    public double CalculateAreaOrVolume(double parameter1, double parameter2 = 0)
    {
        switch (variantNumber)
        {
            case 1: // Конус
                return CalculateConeVolume(parameter1, parameter2);
            case 2: // Циліндр
                return CalculateCylinderVolume(parameter1, parameter2);
            case 3: // Довільний трикутник
                return CalculateTriangleArea(parameter1, parameter2);
            case 4: // Еліпс
                return CalculateEllipseArea(parameter1, parameter2);
            case 5: // Правильний шестикутник
                return CalculateRegularHexagonArea(parameter1);
            case 6: // Трапеція
                return CalculateTrapezoidArea(parameter1, parameter2);
            case 7: // Паралелограм
                return CalculateParallelogramArea(parameter1, parameter2);
            case 8: // Усічений конус
                return CalculateTruncatedConeVolume(parameter1, parameter2);
            case 9: // Прямокутний паралелепіпед
                return CalculateRectangularParallelepipedVolume(parameter1, parameter2);
            case 10: // Піраміда
                return CalculatePyramidVolume(parameter1, parameter2);
            default:
                Console.WriteLine("Невірний номер варіанту.");
                return 0;
        }
    }

    private double CalculateConeVolume(double radius, double height)
    {
        return (Math.PI * Math.Pow(radius, 2) * height) / 3;
    }

    private double CalculateCylinderVolume(double radius, double height)
    {
        return Math.PI * Math.Pow(radius, 2) * height;
    }

    private double CalculateTriangleArea(double baseLength, double height)
    {
        return (baseLength * height) / 2;
    }

    private double CalculateEllipseArea(double majorAxis, double minorAxis)
    {
        return Math.PI * majorAxis * minorAxis;
    }

    private double CalculateRegularHexagonArea(double sideLength)
    {
        return (3 * Math.Sqrt(3) * Math.Pow(sideLength, 2)) / 2;
    }

    private double CalculateTrapezoidArea(double base1, double base2, double height)
    {
        return ((base1 + base2) / 2) * height;
    }

    private double CalculateParallelogramArea(double baseLength, double height)
    {
        return baseLength * height;
    }

    private double CalculateTruncatedConeVolume(double radius1, double radius2, double height)
    {
        return (Math.PI * height * (Math.Pow(radius1, 2) + Math.Pow(radius2, 2) + (radius1 * radius2))) / 3;
    }

    private double CalculateRectangularParallelepipedVolume(double length, double width, double height)
    {
        return length * width * height;
    }

    private double CalculatePyramidVolume(double baseLength, double height)
    {
        return (Math.Pow(baseLength, 2) * height) / 3;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Введіть номер варіанту (1-10):");
        int variantNumber = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Введіть опис завдання:");
        string taskDescription = Console.ReadLine();

        Console.WriteLine("Введіть параметр 1:");
        double parameter1 = Convert.ToDouble(Console.ReadLine());

        double parameter2 = 0;

        if (variantNumber != 3 && variantNumber != 5) 
        {
            Console.WriteLine("Введіть параметр 2:");
            parameter2 = Convert.ToDouble(Console.ReadLine());
        }

        GeometricObject geometricObject = new GeometricObject(variantNumber, taskDescription);

        double result = geometricObject.CalculateAreaOrVolume(parameter1, parameter2);

        Console.WriteLine($"Об'єкт: {geometricObject.GetTaskDescription()}, Результат: {result}");
        Console.ReadKey();
    }
}
