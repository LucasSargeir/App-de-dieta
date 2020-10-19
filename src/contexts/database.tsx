import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import {Semana, Dia, Alimento} from '../myTypes/index';

interface MyContextData{
    alimentosOrdenados: Alimento[];
    alimentosPorCor: Alimento[];
    peso: number;
    semanas: Semana[];
    setPeso: React.Dispatch<React.SetStateAction<number>>;
    encontrarSemana(d: Date): number;
    atualizarSemana(index: number, data: Date, dia: Dia): void;
    apagarStorage(): Promise<void>;
    apagaAlimentoDia(a: Alimento, d: Date): void;
}

const MyContext = createContext<MyContextData>({} as MyContextData);
const cardapio = require('../../cardapio.json');
const cardapioOrdenado = require('../../cardapioSorted.json');

export const MyProvider: React.FC = ({children}) =>{


    const [alimentosOrdenados, setAlimentosOrdenados] = useState<Alimento[]>([]);//o cardapio
    const [alimentosPorCor, setAlimentosPorCor] = useState<Alimento[]>([]);//o cardapio
  //  const [semanaAtual, setSemanaAtual] = useState(-1);
    const [semanasCarregadas, setSemanasCarregadas] = useState(false);
    const [semanas, setSemanas] = useState<Semana[]>([]);
    const [peso, setPeso] = useState(-1);
    


    function apagaAlimentoDia(a: Alimento, d: Date){

       // console.log("Dia: "+d.toDateString());

        const indexWeek = encontrarSemana(d);
        console.log(indexWeek);

        var indexDay = -1
        var indexFood = -1

        d.setMilliseconds(0);
        d.setSeconds(0);
        d.setMinutes(0);
        d.setHours(0);

        semanas[indexWeek].dias.map((dia,i)=>{

            const theDate = new Date(dia.data)

            theDate.setMilliseconds(0);
            theDate.setSeconds(0);
            theDate.setMinutes(0);
            theDate.setHours(0);

            if(theDate.getTime() === d.getTime()){

                indexDay = i;

                dia.alimentos.map((ali, i2)=>{

                    if(ali.nome == a.nome){

                        indexFood = i2

                    }

                })

            }

        });

        console.log(semanas);
        console.log("------------------------------------------------------------------------------------------");
        console.log("Index Day " + indexDay);
        console.log("Index Week " + indexWeek);
        console.log("Index Food " + indexFood);
        console.log("------------------------------------------------------------------------------------------");
        if(indexWeek !== -1 && indexDay !== -1 && indexFood !== -1){

            semanas[indexWeek].dias[indexDay].alimentos.splice(indexFood,1);

        }
        else{
            alert("Erro ao excluir alimento!")
        }
        
        console.log(semanas);

    }

    function encontrarSemana(d: Date){
        
        // Encontra a qual semana esta data pertence, se não encontrar cria uma nova

        var index = -1;
        var newIndex = semanas.length;

        semanas.map((s, i)=>{

            const inicio = new Date(String(s.inicio));
            const fim = new Date(String(s.fim));

            d.setMilliseconds(0)
            d.setSeconds(0)
            d.setMinutes(0)
            d.setHours(0)
            inicio.setMilliseconds(0)
            inicio.setSeconds(0)
            inicio.setMinutes(0)
            inicio.setHours(0)
            fim.setMilliseconds(0)
            fim.setSeconds(0)
            fim.setMinutes(0)
            fim.setHours(0)

            if(d.getTime() >= inicio.getTime() && d.getTime() <= fim.getTime()){

                index = i;

            }

        })

        if(index !== -1){

            return index;

        }
        else{

            const dataIni = new Date();
            dataIni.setDate(d.getDate() - d.getDay());

            const dataFim = new Date();
            dataFim.setDate(dataIni.getDate() + 6);


            semanas.push(
                {
                    numero: newIndex+1,
                    inicio: dataIni,
                    fim: dataFim,
                    peso: `${peso} kg`,
                    dias: []
                }
            )

            atualizarSemana(newIndex, d, {data: d, alimentos: []});

            return newIndex;

        }

    }

    function atualizarSemana(index: number, data: Date, dia: Dia){

        var diaIndex = -1

        semanas[index].dias.map((d, i)=>{

            const data2 = new Date(String(d.data));

            data.setMilliseconds(0);
            data.setSeconds(0);
            data.setMinutes(0);
            data.setHours(0);
            data2.setMilliseconds(0);
            data2.setSeconds(0);
            data2.setMinutes(0);
            data2.setHours(0)  ;

            if(data.getTime() === data2.getTime() ){
                
                diaIndex = i;
                //console.log("dia encontrado, index: " + diaIndex);

            }

        });

        if(diaIndex === -1 ){
            //console.log("Dia não existente inserido");
            semanas[index].dias.push(dia)
        }
        else{
            //console.log("Dia existente atualizado");
            
            dia.alimentos.map((a, i)=>{

                semanas[index].dias[diaIndex].alimentos.push(a)

            });

        }

        atualizar();

    }

    async function apagarStorage(){

        await AsyncStorage.removeItem('@dietapp:semanas');
        setSemanas([]);
        setPeso(-1);
//        setSemanaAtual(-1);
        alert("Historico apagado com sucesso!");
    }

    async function atualizar(){
       // console.log("Atualizei");
        await AsyncStorage.setItem('@dietapp:semanas', JSON.stringify(semanas));
    }

    //Carega as semanas do Async Storage
    useEffect(()=>{

        async function atualiza(){
            //console.log("Mudei o semanas");
            //console.log(JSON.stringify(semanas));
            if(semanasCarregadas === false){
               // console.log("Nao Atualizei");
                
                const data = await AsyncStorage.getItem('@dietapp:semanas');
                
                if(data){
                    setSemanas(JSON.parse(data));
                }
                
                setSemanasCarregadas(true);
                
            }
            else{

               atualizar();
                
            }
        }
            
        atualiza();      


    },[semanas]);

    //Seta o peso com o peso da semana atual    
    useEffect(()=>{
        if(semanasCarregadas === true){

            const week = encontrarSemana(new Date);
            //console.log("Week"+week);
            //setSemanaAtual(week);
            setPeso(Number(semanas[week].peso.replace(" kg", "")));

        }

    },[semanasCarregadas]);
    
    //Cria uma nova semana quando for uma nova
    useEffect(()=>{
        if(semanasCarregadas === true){

            if(semanas.length > 0){
                
                setSemanas(
                    semanas.map((s,i)=>{
                        
                        //console.log("Actual Week: "+JSON.stringify(s));
                        //console.log("Peso:" + peso);
                        //console.log("Index:" + i);
    
                        const hoje = encontrarSemana(new Date())

                        const pesoA = (i === hoje)?peso+" kg": s.peso;
    
                        return( {
                            numero: s.numero,
                            inicio: s.inicio,
                            fim: s.fim,
                            dias: s.dias,
                            peso: pesoA   
                        })
    
                    })
                
                    )
            }
        }

    }, [peso])

    useEffect(()=>{
        setAlimentosPorCor(cardapio);
        setAlimentosOrdenados(cardapioOrdenado.sort((a:Alimento,b:Alimento) => {return (a.nome > b.nome)?1:-1 }));
    },[])

    return(
        <MyContext.Provider value={{semanas, alimentosOrdenados, alimentosPorCor, peso, setPeso, encontrarSemana, atualizarSemana, apagarStorage, apagaAlimentoDia}}>
            {children}
        </MyContext.Provider>
    );

};

export function useMyContext(){

    const context = useContext(MyContext);

    return context;

};