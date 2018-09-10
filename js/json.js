export const json =
{
    "Name": "MsgRegTurno",
    "BusinessObject": "MsgRegTurno",
    "Source": "Automação",
    "Target": "PostoFacil",
    "Version": "1.1",
    "Attributes": [
        {
            "Name": "SiglaPosto",
            "Type": "String",
            "Mandatory": true,
            "Description": "Sigla do Posto onde foi aberto ou fechado o Turno"
        },
        {
            "Name": "CodigoUsuario",
            "Type": "String",
            "Mandatory": true,
            "Description": "Código do Usuário na Automaçao que registrou o Turno"
        },
        {
            "Name": "Status",
            "Type": "String",
            "Mandatory": true,
            "Description": "Status do Turno",
            "ValidValues": [
                {
                    "code": "AB",
                    "name": "Aberto"
                },
                {
                    "code": "FE",
                    "name": "Fechado"
                }
            ]
        },
        {
            "Name": "DhtTurno",
            "Type": "DateTime",
            "Mandatory": true,
            "Description": "Data/hora de início/término do Turno em UTC"
        },
        {
            "Name": "Tanques",
            "Type": "List<RegTurnoTanque>",
            "Mandatory": true,
            "Description": "Lista de tanques do Posto à que o turno se refere",
            "Attributes": [
                {
                    "Name": "SiglaTanquePosto",
                    "Type": "String",
                    "Mandatory": true,
                    "Description": "Sigla do Tanque do Posto"
                },
                {
                    "Name": "Volume",
                    "Type": "Decimal",
                    "Mandatory": true,
                    "Description": "Volume do Tanque"
                }
            ]
        },
        {
            "Name": "BlocosMedidores",
            "Type": "List<RegTurnoBloco>",
            "Mandatory": true,
            "Description": "Lista de blocos do Posto à que o turno se refere",
            "Attributes": [
                {
                    "Name": "SiglaBloco",
                    "Type": "String",
                    "Mandatory": true,
                    "Description": "Sigla do Bloco Medidor do Posto"
                },
                {
                    "Name": "Encerrante",
                    "Type": "Decimal",
                    "Mandatory": true,
                    "Description": "Encerrante Medido"
                },
                {
                    "Name": "DthEncerrante",
                    "Type": "DateTime",
                    "Mandatory": true,
                    "Description": "Instante de Tempo em que o encerrante foi lido"
                }
            ]
        }
    ]
}