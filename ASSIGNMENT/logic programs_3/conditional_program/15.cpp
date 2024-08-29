
#include<stdio.h>
main(){
	int phy=65,chemistry=51,maths=72;
	int total,total_m_p;
	total = phy+ chemistry +maths;
	if(maths>=65 && phy >=55 && chemistry>=50 && total>=190 ||total_m_p >=140 )
	{
		printf("eligible ");
	}
	else{
		printf("not eligible ");
		
	}
}
