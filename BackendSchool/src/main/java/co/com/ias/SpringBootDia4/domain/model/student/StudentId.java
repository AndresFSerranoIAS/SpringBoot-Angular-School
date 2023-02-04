package co.com.ias.SpringBootDia4.domain.model.student;

import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.util.Assert;

import java.util.regex.Pattern;

import static java.util.function.Predicate.isEqual;

public class StudentId {
    private final Long value;

    public StudentId(Long value) {
        this.value = value;
        if (value !=null) {
            Assert.isTrue(value.toString().chars().allMatch(Character::isDigit), "Por favor ingrese solo números como ID del estudiante");
        }
    }

    public Long getValue() {
        return value;
    }
}
