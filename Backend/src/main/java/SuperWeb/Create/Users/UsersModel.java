package SuperWeb.Create.Users;

import jakarta.persistence.*;
import lombok.*;

@Table
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity

public class UsersModel {

    @Id
    @GeneratedValue(strategy = GenerationType. IDENTITY)

    private Long id;
    @Column(unique = true,nullable = false)
    private String username;
    private String email;
    private String password;
    private String phoneNumber;
    private String subject;
    private String message;


    public UsersModel(String username, String email, String phoneNumber, String subject, String message, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.subject = subject;
        this.message = message;
    }
}
