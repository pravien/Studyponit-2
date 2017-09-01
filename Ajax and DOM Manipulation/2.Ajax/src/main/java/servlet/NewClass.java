/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import com.google.gson.Gson;
import domain.Time;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import org.json.JSONException;
import org.json.JSONObject;

/**
 *
 * @author Pravien
 */
public class NewClass
{
    public static void main(String[] args) throws JSONException
    {
            Calendar c = Calendar.getInstance();
            Time time = new Time(c.get(Calendar.HOUR),c.get(Calendar.MINUTE),c.get(Calendar.SECOND));
            Gson gson = new Gson();
            String jsonInString = gson.toJson(time);
            System.out.println(jsonInString);
    }
}
