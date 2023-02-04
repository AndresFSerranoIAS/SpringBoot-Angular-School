package co.com.ias.SpringBootDia4.domain.model.student;

import org.springframework.util.Assert;

public class StudentIdSubject {
    private final Long value;

    public StudentIdSubject(Long value) {
        this.value = value;
            Assert.isTrue(value!=null,"Por favor ingrese un ID de la materia para el estudiante que quiere registrar en la base de datos");
    }

    public Long getValue() {
        return value;
    }
}
