package co.com.ias.SpringBootDia4.domain.model.student;

import org.springframework.util.Assert;

import java.util.regex.Pattern;

public class StudentName {
    private final String value;

    public StudentName(String value) {
        this.value = value;
        Assert.isTrue(value!="","Por favor ingrese un nombre para la materia que quiere registrar en la base de datos");
        Assert.isTrue(value!=null,"Por favor ingrese un nombre para la materia que quiere registrar en la base de datos");
        Assert.isTrue(Pattern.matches("[\\p{L}\\s]+", value), "Por favor sólo suministre letras del abecedario en el nombre del estudiante");
    }

    public String getValue() {
        return value;
    }
}
