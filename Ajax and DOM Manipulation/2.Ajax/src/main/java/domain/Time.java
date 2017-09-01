/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package domain;

/**
 *
 * @author Pravien
 */
public class Time
{
    private int hour,minut,seconds;

    public Time(int hour, int minut, int seconds)
    {
        this.hour = hour;
        this.minut = minut;
        this.seconds = seconds;
    }

    public int getHour()
    {
        return hour;
    }

    public void setHour(int hour)
    {
        this.hour = hour;
    }

    public int getMinut()
    {
        return minut;
    }

    public void setMinut(int minut)
    {
        this.minut = minut;
    }

    public int getSeconds()
    {
        return seconds;
    }

    public void setSeconds(int seconds)
    {
        this.seconds = seconds;
    }
    
    
}
