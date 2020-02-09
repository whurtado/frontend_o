export  class  Cliente {

    public id: number;
    public primernombre:  string;  
    public segundonombre:  any;  
    public primerapellido:  string;  
    public segundoapellido:  any;  
    public documento:  any;  
    public direccion:  string;  
    public telefonoCasa:  string;  
    public telefonoOficina:  string;  
    public celular:  string;  
    public direccionTrabajo:  string;  
    public email:  string;  
    public fechaNacimiento:  Date;  
    public observacion:  string;  

  }

  export  class  DetalleCliente {

    public id: string;
    public nombre_referencia:  string;  
    public telefono_referencia:  string;  
    
  }

  export  class  EstadoCliente {

    public id: string;
    public estado:  string;  
    public descripcion:  string;  
    
  }

  export  class  NovedadCliente {

    public id: string;
    public descripcion:  string; 
  }
