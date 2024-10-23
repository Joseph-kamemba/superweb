package SuperWeb.Create.product;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class ProductModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
   private String description;
   private String title;

    @Lob  // Marks the field to be stored as a BLOB
    private byte[] image;
}
