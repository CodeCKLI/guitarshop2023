package com.ckdev.guitarshop_api.repos;

import com.ckdev.guitarshop_api.models.Entities.GuitarEntity;
import com.ckdev.guitarshop_api.repositories.GuitarRepo;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@ExtendWith(SpringExtension.class)
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
public class GuitarRepoIntegrationTests {

    private final GuitarRepo underTest;

    @Autowired
    public GuitarRepoIntegrationTests(GuitarRepo underTest) {
        this.underTest = underTest;
    }

    @Test
    public void testThatAuthorCanBeCreatedAndRecalled() {
        GuitarEntity guitar = TestDataUtil.createTestGuitarA();
        underTest.save(guitar);
        Optional<GuitarEntity> result = underTest.findById(guitar.getId());
        assertThat(result).isPresent();
        assertThat(result.get()).isEqualTo(guitar);
    }

}

