
const listeners = {};

export const PubSub = {
    
	subscribe: function (data) {
    let {event, listener, events} = data;

		if (!events) {
			events = [event];
		}

		events.forEach( event => {

			if (listeners[event] === undefined) {
				listeners[event] = [listener];
			} else {
				listeners[event] = [...listeners[event], listener];
			}    

		});

	},

	publish: function (data) {
			let { event, detail } = data;
			if ( !event ) { myError.throw("No Event Type"); }
	
			if (doLog(event)) {
					console.log( "Event Published: " + event, detail );
			}

			if (listeners[event] === undefined) {
					doLog && console.log(`Event (${event}) has no listeners`);
					return;
			}
	
			listeners[event].forEach((listener) => {
	
					// If the listener is a function we'll invoke it with detail
					if (typeof listener === 'function') {
							// TODO: catch errors?
							listener(detail);
					} else {
							// Otherwise we'll dispatch a CustomEvent
							listener.dispatchEvent(new CustomEvent(event, { detail }));
					}
			});
	},

	unsubscribe: function (data) {
			let {event, listener} = data;
			// If no one is listening we'll do nothing
			if (listeners[event] === undefined) {
					return;
					
			}
	
			// Otherwise we'll filter out the listener from the array of listeners
			listeners[event] = listeners[event].filter((currentListener) => {
					// If they're unsubscribing a listener which is a function, we'll compare the function names
					if (typeof currentListener === 'function') {
							return currentListener.name !== listener.name;
					}
	
					// Components can be compared normally
					return currentListener !== listener;
			});
	},

}

function doLog (event)
{
	if (event.indexOf("RENDER::") > -1) return false;
	if (event.indexOf("RENDER::") > -1 && event.indexOf("users_in_") === -1) return false;
	return true;
}