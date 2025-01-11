import { createContext, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie"

import ps5 from '../pics/ps5.webp';
import keyBoard  from '../pics/keyBoard.webp';
import tv from '../pics/tv.webp';
import chair from '../pics/chair.webp';
import jaket from '../pics/jaket.webp';
import bag from '../pics/bag.webp';
import speaker from '../pics/speaker.webp';
import comod from '../pics/comod.webp';
import dogFood from '../pics/dogFood.webp';
import camera from '../pics/camera.webp';
import cream from '../pics/cream.webp';
import carToy from '../pics/carToy.webp';
import shoes from '../pics/shoes.webp'

import { IoIosPhonePortrait } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";

const itemsContext = createContext();
 
function ItemsProvider({children}){

    const [searchQuery, setSearchQuery] = useState('');
    const [searchList, setSearchList] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favoritesItems, setFavoriteItems] = useState([]);
    const [visibleMassage, setVisibleMassage ] = useState(false);
    const [visibleFavorite, setVisibleFavorite] = useState(false);
    const [count, setCount ] = useState(1);
    const [itemCounts, setItemCounts] = useState({});
    const [user, setUser] = useState(null)

    const items = [
        {
            photo: ps5,
            name:'ps5 games',
            peforeDis : 69.99,
            afterDis: 41.99,
            discount: ((69.99 - 41.99) / 69.99) * 100,
            bestSeller: true,
            category: 'Gaming',
            id: 1,
            Dec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
            photo: keyBoard,
            name:'Ak-9000 Keyboard',
            peforeDis : 8.99,
            afterDis: 5.99,
            discount: ((8.99 - 5.99) / 8.99) * 100,
            category: 'Computer',
            id: 2,
            Dec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
            photo: tv,
            name:'LCD Moniter',
            peforeDis : 244.99,
            afterDis: 171.99,
            discount: ((244.99 - 171.99) / 244.99) * 100,
            bestSeller: true,
            category: 'Phones',
            id: 3,
            Dec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
            photo: chair,
            name:'S-series Chair',
            peforeDis : 69.99,
            afterDis: 41.99,
            discount: ((69.99 - 41.99) / 69.99) * 100,
            category: '',
            id: 4,
            Dec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
            photo: jaket,
            name:'ps5 North Caoat',
            peforeDis : 89.99,
            afterDis: 53.99,
            discount: ((89.99 - 53.99) / 89.99) * 100,
            bestSeller: true,
            category: 'Phones',
            id: 5,
            Dec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
            photo: bag,
            name:'Gucci Bag',
            peforeDis : 2982.99,
            afterDis: 2682.99,
            discount: ((2982.99 - 2682.99) / 2982.99) * 100,
            category: 'Camera',
            id: 6,
            Dec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
            photo: speaker,
            name:' CPU Cooler',
            peforeDis : 69.99,
            afterDis: 41.99,
            discount: ((69.99 - 41.99) / 69.99) * 100,
            bestSeller: true,
            category: 'Computer',
            id: 7,
            Dec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
            photo: comod,
            name:'Book Shelf',
            peforeDis : 69.99,
            afterDis: 41.99,
            discount: ((69.99 - 41.99) / 69.99) * 100,
            category:'Gaming',
            id: 8,
            Dec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
            photo: dogFood,
            name:' Dog Food',
            peforeDis : 69.99,
            afterDis: 41.99,
            discount: ((69.99 - 41.99) / 69.99) * 100,
            bestSeller: true,
            category:'Gaming',
            id: 9,
            Dec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
            photo: camera,
            name:'Canon Camera',
            peforeDis : 69.99,
            afterDis: 41.99,
            discount: ((69.99 - 41.99) / 69.99) * 100,
            category: 'Camera',
            id: 10,
            Dec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',

        },
        {
            photo: cream,
            name:'Curology',
            peforeDis : 69.99,
            afterDis: 41.99,
            discount: ((69.99 - 41.99) / 69.99) * 100,
            bestSeller: true,
            category: 'Headphones',
            id: 11,
            Dec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',

        },
        {
            photo: carToy,
            name:'Electric Car',
            peforeDis : 69.99,
            afterDis: 41.99,
            discount: ((69.99 - 41.99) / 69.99) * 100,
            category: 'Gaming',
            id: 12,
            Dec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
            photo: shoes,
            name:'Soccer Cleat',
            peforeDis : 69.99,
            afterDis: 41.99,
            discount: ((69.99 - 41.99) / 69.99) * 100,
            bestSeller: true,
            category:'Headphones',
            id: 13,
            Dec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        }
    ];

    const category = [
        {
            name: 'Phones',
            photo: <IoIosPhonePortrait />
        },
        {
            name: 'Computer',
            photo: <RiComputerLine />  
        },
        {
            name: 'Smartwatch',
            photo: <BsSmartwatch />
        },
        {
            name: 'Camera',
            photo: <IoCameraOutline />

        },
        {
            name: 'Headphones',
            photo: <CiHeadphones />
        },
        {
            name: 'Gaming',
            photo: <IoGameControllerOutline />
        }
    ];

    const inc = () => {
        setCount(count+1);
    }
    const dec = () => {
        setCount(prev=>(prev > 1 ? prev - 1 : prev));
    }

    const onSearch = () => {
        const filteredSearch = items.filter((item) => {
            return item.name.toLowerCase().includes(searchQuery.toLowerCase()); 
        });
        setSearchList(filteredSearch); 
    };
    const addToCard = async (item) => {
      const response = await axios.post('http://localhost:3001/cart',{
            item
        });
        let itemExist = cartItems.some(x=> item.id == x.id);

        if(itemExist) {
            
            setCartItems([...cartItems.map(xItem => {
                    if(xItem.id == item.id) {
                        xItem.count = xItem.count + count
                        return xItem
                    } else {
                        return xItem
                    }
                })]);
        } else {
        setCartItems([...cartItems, {...item, count}]);
        }
   
        setCount(1)
        setVisibleMassage(true);
    
        setTimeout(() => {
            setVisibleMassage(false);
        }, 3000);
    };


    const removeFromCard = (item) => {
            setCartItems([...cartItems.map(xItem => {
                    if(xItem.id == item.id) {
                        xItem.count = xItem.count -1
                        return xItem
                    } else {
                        return xItem
                    }
                })]);
    };
    const onDelete = (id) => {
        const deleteItem = cartItems.filter((item) => {
            return item.id != id
        });
        setCartItems(deleteItem)

    };


    const addToFavorite = (item) => {
        setFavoriteItems(existItem => [...existItem,{...item, userId: user.id}])

        setVisibleFavorite(true);

        setTimeout(() => {
            setVisibleFavorite(false)
        },3000)

    }
    
 
    const decodeToken = (token) => {
        Cookies.set("mytoken", token)
        const decoded = jwtDecode(token);
        console.log(decoded, "from context")
        setUser(decoded)
    }

const signOut = () => {
    setUser(null)
    Cookies.remove("mytoken")
}
  
    const valueToShare = {
        user,
        signOut,
        decodeToken,
        items,
        category,
        searchQuery,
        setSearchQuery,
        onSearch,
        searchList,
        addToCard,
        cartItems,
        addToFavorite,
        favoritesItems,
        visibleMassage,
        visibleFavorite,
        count,
        inc, 
        dec,
        removeFromCard,
        onDelete
    }
    return(
        <itemsContext.Provider value={valueToShare}>
            {children}
        </itemsContext.Provider>
    )
};
export{ItemsProvider};
export default itemsContext;