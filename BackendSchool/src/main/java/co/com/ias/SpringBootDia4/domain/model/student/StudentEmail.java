package co.com.ias.SpringBootDia4.domain.model.student;

import org.springframework.util.Assert;

import java.util.regex.Pattern;

public class StudentEmail {
    private final String value;

    public StudentEmail(String value) {
        this.value = value;
        Assert.isTrue(value!="","Por favor ingrese el email para el estudiante que quiere registrar en la base de datos");
        Assert.isTrue(value!=null,"Por favor ingrese el email para el estudiante que quiere registrar en la base de datos");
        Assert.isTrue(!Pattern.matches("[^(.+)@(\\S+)$]+",value),"Por favor solo suministre un formato de email válido para el estudiante que quiere registrar en la base de datos");
    }

    public String getValue() {
        return value;
    }

}
