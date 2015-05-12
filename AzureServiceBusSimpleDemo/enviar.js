var azure = require('azure'), 
	conf = require('conf');

var mensagem = {
    body: 'Mensagem de teste',
    customProperties: {
        testproperty: 'Propriedade customizada qualquer!'
    }};


var enviarMensagem = function () {
	
	var sb = azure.createServiceBusService(conf.param.sbConn);
	sb.sendQueueMessage(conf.param.queue, mensagem, function(error){
		
	    if(!error){
	        console.log('Mensagem enviada!');
	    }
		enviarMensagem();
	});
	
};

enviarMensagem();