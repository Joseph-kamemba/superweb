package SuperWeb.Create.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;


    List<ProductModel> fetchAllProducts() {
        return productRepository.findAll();
    }

    ProductModel fetchById(Long id) {
        return productRepository.findById(id).get();
    }

    public ProductModel createProduct(ProductController.ProductRequest productRequest, MultipartFile file) {
        byte[] imageData;
        try{
            imageData = file.getBytes();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        // Convert ProductRequest to ProductModel
        ProductModel product = new ProductModel(
                null,  // Assuming ID is auto-generated
                productRequest.description(),
                productRequest.title(),
                imageData
        );

        // Save the ProductModel using the repository
        return productRepository.save(product);
    }

    public String  deleteProduct(ProductModel product) {
    productRepository.delete(product);
    return "Product has been deleted successfully for Id :" +product.getId();
    }

    ProductModel updateProduct (Long id, ProductController.ProductRequest productRequest){
        ProductModel prodObj = fetchById(id);

//        if(prodObj!= null){
//            prodObj.setBrand(productRequest.brand());
//            prodObj.setName(productRequest.name());
//            prodObj.setCategory(productRequest.category());
//        }
        assert prodObj != null;
        return productRepository.save(prodObj);
    }


}
