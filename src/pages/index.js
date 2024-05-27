import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  SimpleGrid,
  Table, 
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Produtos = () => {
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    const db_products = localStorage.getItem("db_products")
     ? JSON.parse(localStorage.getItem("db_products"))
      : [];

    setListProducts(db_products);
  }, []);

  const handleNewProduct = () => {
    if (!productName ||!productCode ||!productDescription ||!productCategory ||!supplierName) {
      alert("Preencha todos os campos!");
      return;
    }

    if (verifyProductName()) {
      alert("Produto já cadastrado!");
      return;
    }

    const id = Math.random().toString(36).substring(2);

    const newProduct = {
      id,
      name: productName,
      code: productCode,
      description: productDescription,
      category: productCategory,
      supplier: supplierName,
    };

    if (listProducts && listProducts.length) {
      localStorage.setItem(
        "db_products",
        JSON.stringify([...listProducts, newProduct])
      );

      setListProducts([...listProducts, newProduct]);
    } else {
      localStorage.setItem("db_products", JSON.stringify([newProduct]));

      setListProducts([newProduct]);
    }

    setProductName("");
    setProductCode("");
    setProductDescription("");
    setProductCategory("");
    setSupplierName("");
  };

  const verifyProductName = () => {
    return!!listProducts.find((prod) => prod.name === productName);
  };

  const removeProduct = (id) => {
    setListProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    localStorage.setItem("db_products", JSON.stringify(listProducts));
  };

  return (
    <Flex h="100vh" flexDirection="column">
      <Header />

      <Flex w="100%" my="6" maxW={1120} mx="auto" px="6" h="100vh">
        <Sidebar />

        <Box w="100%">
          <SimpleGrid minChildWidth={240} h="fit-content" spacing="6">
            <Input
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Nome do produto"
            />
            <Input
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)}
              placeholder="Código do produto"
            />
            <Input
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder="Descrição do produto"
            />
            <Input
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              placeholder="Categoria do produto"
            />
            <Input
              value={supplierName}
              onChange={(e) => setSupplierName(e.target.value)}
              placeholder="Nome do fornecedor"
            />
            <Button w="40" background="#808080" onClick={handleNewProduct}>
              CADASTRAR
            </Button>
          </SimpleGrid>

          <Box overflowY="auto" height="80vh">
            <Table mt="6">
              <Thead>
                <Tr>
                  <Th fontWeight="bold" fontSize="14px">
                    PRODUTOS
                  </Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {listProducts.map((item, i) => (
                  <Tr key={i}>
                    <Td color="gray.500">
                      {item.name} ({item.code})
                      <br />
                      {item.description}
                      <br />
                      Categoria: {item.category}
                      <br />
                      Fornecedor: {item.supplier}
                    </Td>
                    <Td textAlign="end">
                      <Button
                        p="2"
                        h="auto"
                        fontSize={11}
                        color="black"
                        fontWeight="bold"
                        background="red.500"
                        onClick={() => removeProduct(item.id)}
                      >
                        DELETAR
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};
export default Produtos;
