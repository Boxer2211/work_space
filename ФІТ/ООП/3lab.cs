using System;


abstract class CGraphicsObject
{
    
    protected string objectType;
    protected string color;


    public CGraphicsObject(string objectType, string color)
    {
        this.objectType = objectType;
        this.color = color;
    }



    public abstract void Show();
}


class CPoint : CGraphicsObject
{
   
    protected int x;
    protected int y;


    public CPoint(int x, int y, string color) : base("Point", color)
    {
        this.x = x;
        this.y = y;
    }

  
    public int X
    {
        get { return x; }
        set { x = value; }
    }

    public int Y
    {
        get { return y; }
        set { y = value; }
    }

 
    public override void Show()
    {
        Console.WriteLine($"Point: ({x}, {y}), Color: {color}");
    }
}


class CCircle : CPoint
{

    protected int radius;

    public CCircle(int x, int y, int radius, string color) : base(x, y, color)
    {
        this.radius = radius;
        objectType = "Circle";
    }


    public int Radius
    {
        get { return radius; }
        set { radius = value; }
    }


    public override void Show()
    {
        Console.WriteLine($"Circle: Center ({X}, {Y}), Radius: {radius}, Color: {color}");
    }
}



class Program
{
    static void Main(string[] args)
    {
      
        CCircle circle = new CCircle(10, 20, 5, "Red");
        circle.Show();

    }
}
