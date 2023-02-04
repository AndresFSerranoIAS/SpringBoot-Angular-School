package co.com.ias.SpringBootDia4.domain.model.student;

import org.springframework.util.Assert;
import java.util.regex.Pattern;

public class StudentPhone {
    private final String value;

    public StudentPhone(String value) {
        this.value = value;
        Assert.isTrue(value!="","Por favor ingrese un telefono para el estudiante que quiere registrar en la base de datos");
        Assert.isTrue(value!=null,"Por favor ingrese un telefono para el estudiante que quiere registrar en la base de datos");
        Assert.isTrue(Pattern.matches("^\\+[0-9]{2}\\s[0-9]{3}\\s[0-9]{3}\\s[0-9]{4}$", value), "El número telefónico no tiene el formato correcto (ejemplo: +56 301 3429 5243)");
    }

    public String getValue() {
        return value;
    }
}
