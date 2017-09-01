/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 *
 * @author Pravien
 */
public class NewClass
{
    public static void main(String[] args)
    {
            Calendar c = Calendar.getInstance();
            System.out.println(c.get(Calendar.HOUR));
            System.out.println(c.get(Calendar.MINUTE));
            System.out.println(c.get(Calendar.SECOND));
    }
}
