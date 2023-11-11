import { gql } from '@apollo/client';

// Consulta para obtener todos los elementos
const GET_ALL_ITEMS = gql`
  query MyQuery{
    GetAll {
      id_documento
      departamento
      residente
      fecha_de_pago
      tipo_de_servicio
      url_pdf
    }
  }
`;

// Consulta para obtener un elemento por ID
const GET_ONE_ITEM = gql`
  query GetOneItem($id: ID!) {
    getOne(Factura_id: $id) {
      Factura_id
      departamento
      servicio
      fecha_de_pago
      estado
      cantidad
    }
  }
`;

// Mutación para guardar un elemento
const SAVE_ITEM = gql`
  mutation SaveItem($id: ID!, $departamento: String!, $servicio: String!, $fecha_de_pago: String!, $estado: String!, $cantidad: String!) {
    save(Factura_id: $id, departamento: $departamento, servicio: $servicio, fecha_de_pago: $fecha_de_pago, estado: $estado, cantidad: $cantidad) {
      Factura_id
      departamento
      servicio
      fecha_de_pago
      estado
      cantidad
    }
  }
`;

// Mutación para eliminar un elemento
const DELETE_ITEM = gql`
  mutation DeleteItem($id: ID!) {
    delete(Factura_id: $id) {
      Factura_id
    }
  }
`;

export {
  GET_ALL_ITEMS,
  GET_ONE_ITEM,
  SAVE_ITEM,
  DELETE_ITEM
};