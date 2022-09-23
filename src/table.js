import React,{Component} from "react";
class Table extends React.Component{
    render(){
        return(
            <table>
                <tr>
                    <th>NOM</th>
                    <th>PRENOM</th>
                </tr>
                <tr>
                    <td>IBN ABBAD</td>
                    <td>Sara</td>
                </tr>
                <tr>
                    <td>SAIDI</td>
                    <td>Salma</td>
                </tr>
                <tr>
                    <td>ELBAIDAK</td>
                    <td>Houda</td>
                </tr>
            </table>
        )
    }
}