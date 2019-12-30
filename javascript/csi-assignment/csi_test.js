

function Calculate()

        {
            int T, P = 0;
            
            string N = (txtInteger.Text);
            
            lstAnswer.Items.Clear();


            for (int j = 0; int.Parse(N) > 9; j++)
            {
                T = int.Parse(N.Substring(0, 1));

                for (int i = 1; i < N.Length; i++)
                
                    T *= (int.Parse(N.Substring(i, 1)));

                N = T.ToString();
               
				document.write("Transformation [" + (j+1) + "]: " + T);
				 
                P+=1;
                
            }
            
            lstAnswer.Items.Add("P=" + P);
            
        }
