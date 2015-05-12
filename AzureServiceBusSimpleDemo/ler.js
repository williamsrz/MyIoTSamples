var azure = require('azure'), 
	conf = require('conf');
    
var lerMensagem = function () {

    var sb = azure.createServiceBusService(conf.param.sbConn);
    sb.receiveQueueMessage(conf.param.queue, function(error, mensagem){
    
        if(!error){
            
           //TODO: Fazer o parse do JSON
           console.log(mensagem);
           console.log('\n\n');
        }
    
        lerMensagem();
    });
};

lerMensagem();