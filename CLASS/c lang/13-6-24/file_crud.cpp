#include<stdio.h>
main(){
	FILE *fp;
//	fp=(fopen("test1.txt","w"));
	fp=(fopen("test1.txt","a"));//create by default if not exist if exist then overwrite (w create,write  a append
	fprintf(fp,"\n welcome bofdknddsddds ffkjkfjhjfhjfhjfhjfjhjhjf");
	fclose(fp);
	
}
