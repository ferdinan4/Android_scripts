#!/bin/bash

/opt/genymobile/genymotion/tools/adb shell "ps -A |grep $1";


pid=$(/opt/genymobile/genymotion/tools/adb shell "ps -A |grep $1"|awk '{print $2}')

echo "PID -->" "${pid}"

echo "Hacemos el ADB forwards"
adb_for_command=$(/opt/genymobile/genymotion/tools/adb forward tcp:1337 tcp:1337)
echo "Errores --> ${adb_for_command}"


output_GDBserver=$(/opt/genymobile/genymotion/tools/adb shell "/data/local/tmp/gdbserver --multi :1337 --attach $pid &")

echo "Lanzado GDB attacheandome a " "${pid}" " y con la siguiente salida" "${output_GDBserver}"




