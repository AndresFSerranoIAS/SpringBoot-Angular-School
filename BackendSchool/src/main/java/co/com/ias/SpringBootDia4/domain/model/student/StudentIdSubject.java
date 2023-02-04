package co.com.ias.SpringBootDia4.domain.model.student;

import org.springframework.util.Assert;

public class StudentIdSubject {
    private final Long value;

    public StudentIdSubject(Long value) {
        this.value = value;
        if (value !=null) {
            Assert.isTrue(value!=null,"Por favor ingrese un ID de la materia para el estudiante que quiere registrar en la base de datos");
            Assert.isTrue(value.toString().chars().allMatch(Character::isDigit), "Por favor ingrese solo números como ID del estudiante");
        }
    }

    public Long getValue() {
        return value;
    }
}
