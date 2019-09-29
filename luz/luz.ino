#include <ESP8266WiFi.h>

const char* ssid = "Google";
const char* password = "googol00";
const char* host = "192.168.43.70";
const char* room_id = "5d8ee8ab6f56f21a762d03ab";
int use = 0;
const int port = 3333;
//WiFiClient client;
//IPAddress server(192,168,43,70);

int led = D4; // Trocar pela saida do led
int sensor = A0; // Trocar pela entrada do sensor de luz
int luz = 0; // Auxiliar para medir nivel da luz

void setup() {
  Serial.begin(115200);
  pinMode(led, OUTPUT);
  digitalWrite(led, HIGH);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
     delay(500);
     Serial.println("Conectando...");
  }
  digitalWrite(led, LOW);
//  if (client.connect(host, 3333)) {
//    Serial.println("Conectado");
////    client.println("GET /rooms HTTP/1.0");
//  } else {
//    Serial.println("Não conectado");
//  }
}

void loop() {
  luz = analogRead(sensor); // 0 - 1023
  int aux = 0;
  if (luz < 600) { // Acender quando sala vazia
    digitalWrite(led, HIGH);
    aux = 1;
  } else { // Apagar quando sala usada
    digitalWrite(led, LOW);
    aux = 0;
  }

//  Serial.println("Aux" + String(aux) + "Use" + String(use));
  if (aux != use) {
    use = aux;
    WiFiClient client;
    if (client.connect(host, 3333)){
      Serial.println("Conected: " + String(client.connected()));
      Serial.println("Conectou loop");
      if (aux == 1) {
        Serial.println("Habilitando");
        client.println("PUT /room/use/" + String(room_id) + "/true HTTP/1.0");
      } else {
        Serial.println("Desabilitando");
        client.println("PUT /room/use/" + String(room_id) + "/false HTTP/1.0");
      }
      client.println();
      client.stop();
    } else {
      Serial.println("Não conectou loop");
    }
  }
  delay(500);
}
