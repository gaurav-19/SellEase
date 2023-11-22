import React, { useContext, useEffect, useState } from "react";

import { ActivityIndicator, Alert, FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./../components/Header";
import CategoryBox from "./../components/CategoryBox";
import { categories } from "./../data/categories";
import { moreproducts, products } from "./../data/products";
import ProductHomeItem from "./../components/ProductHomeItem";
import { UserContext } from "../../App";

const Home = ({ navigation }) => {
    const {setIsLoggedIn} = useContext(UserContext);

    const [selectedCategory, setSelectedCategory] = useState();
    const [keyword, setKeyword] = useState();
    const [filteredProducts, setFilteredProduct] = useState(products);
    const [page, SetPage] = useState(1);

    useEffect(() => {
        if(selectedCategory && !keyword){
            const updatedProduct = products.filter((product) => product?.category === selectedCategory);
            setFilteredProduct(updatedProduct);
        } else if(selectedCategory && keyword){
            const updatedProduct = products.filter((product) => product?.category === selectedCategory && product?.title?.toLowerCase().includes(keyword.toLowerCase()));
            setFilteredProduct(updatedProduct);
        } else if(!selectedCategory && keyword){
            const updatedProduct = products.filter(product => product?.title?.toLowerCase().includes(keyword.toLowerCase()));
            setFilteredProduct(updatedProduct);
        } else if(!selectedCategory && !keyword){
            setFilteredProduct(products);
            SetPage(1);
        }

    }, [selectedCategory, keyword] );

    const loadData = () => {
        if(page < 2 && !selectedCategory && !keyword){
            setFilteredProduct([...filteredProducts, ...moreproducts]);
            SetPage(page+1);
        }
    }

    const renderCategoryItem = ({ item, index }) => {
        return(
            <CategoryBox
            onPress={() => setSelectedCategory(item?.id)} 
            isSelected={item?.id === selectedCategory}
            isFirst={index === 0} 
            title={item?.title} 
            image={item?.image}/>
        )
    }

    const renderProductItem = ({ item }) => {
        const onProductPress = (product) => {
            navigation.navigate("ProductDetails", { product });
        }

        return(
            <ProductHomeItem onPress={() => onProductPress(item)} {...item}/>
        )
    }

    const onLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <View style={styles.container}>
            <Header onSearch={setKeyword} keyword={keyword} showSearch title="Find all you need" showLogout onLogout={onLogout}/>

            <FlatList style={ styles.list } data={categories} showsHorizontalScrollIndicator={false} horizontal renderItem={renderCategoryItem} keyExtractor={(item, index ) => String(index) } />

            <FlatList style={styles.productList} numColumns={2} data={filteredProducts} renderItem={renderProductItem} keyExtractor={(item) => String(item.id)}
            ListEmptyComponent={<Text>no data</Text>}
            ListFooterComponent={<View style={{ height: 200 }}></View>}
            onEndReached={loadData}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    },
    list: {
        // paddingVertical: 24,
        marginTop: 20,
        height:80
    },
    productList:{
        paddingHorizontal: 16
    }
})

export default Home;