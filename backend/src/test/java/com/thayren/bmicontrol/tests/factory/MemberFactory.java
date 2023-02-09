package com.thayren.bmicontrol.tests.factory;

import com.thayren.bmicontrol.dto.MemberDTO;
import com.thayren.bmicontrol.entities.Member;
import com.thayren.bmicontrol.entities.Trainer;

public class MemberFactory {
	
	public static Member createEmptyMember() {
		Trainer trainer = new Trainer(1L, "Rafael Miranda Souza", 37, "999.999.999-99", "31 9 9999-9999");
		return new Member(1L, "", 0.0, 0.0, 0.0, "", trainer);
	}
	
	public static Member createMember() {
		Trainer trainer = new Trainer(1L, "Rafael Miranda Souza", 37, "999.999.999-99", "31 9 9999-9999");
		Member member = new Member(1L, "Amanda Costa Mezenga", 1.68, 50.0, 17.72, "MAGREZA", trainer);
		
		return member;
	}
	
	public static MemberDTO createMemberDTO() {
		Member member = createMember();
		
		return new MemberDTO(member);
	}
	
	public static MemberDTO createMemberDTO(Long id) {
		MemberDTO memberDto = createMemberDTO();
		memberDto.setId(id);
		
		return memberDto;
	}

}
