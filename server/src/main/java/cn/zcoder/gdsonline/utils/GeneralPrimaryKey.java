package cn.zcoder.gdsonline.utils;

import java.time.LocalDate;
import java.util.Random;

public class GeneralPrimaryKey {

    private static String getRandomLetters(int length) {
        Random random = new Random();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < length; i++) {
            char c = (char) (random.nextInt(26) + 'a');
            sb.append(c);
        }
        return sb.toString().toUpperCase();
    }

    public static String getPrimaryKey(){
        LocalDate nowDate = LocalDate.now();
        int random = (int) (Math.random() * 10000);
        String key = String.valueOf(nowDate.getDayOfMonth())+ nowDate.getDayOfYear() + String.format("%04d",random);
        return  getRandomLetters(5) + key ;
    }
}
